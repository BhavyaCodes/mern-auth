import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import passport from "passport";
import bcrypt from "bcrypt";
import cookieSession from "cookie-session";
import path from "path";

import config from "./config";
import User from "./models/User";
import "./services/passport";

import { CustomError } from "../interfaces";

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey!],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/test", (req, res, next) => {
  res.json({ hello: "world" });
});

app.post("/api/register", async (req, res, next) => {
  const { email, password, firstName, lastName, dob } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error: CustomError = new Error(
        "an account with this email already exists"
      );
      error.statusCode = 409;
      throw error;
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hash,
      firstName,
      lastName,
      dob,
    });

    res.status(201).json({ name: newUser.firstName });
  } catch (error) {
    next(error);
  }
});

app.post(
  "/api/login",
  passport.authenticate("local", { failureRedirect: "/api/login-error" }),
  function (req, res) {
    // res.json({ user: { email: req.user?.email } });
    res.json({ ...req.user, password: undefined });
  }
);

app.get("/api/login-error", (req, res, next) => {
  res.status(401).json({ error: "Invalid credentials" });
});

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message, data });
  }
);

app.get("/api/current-user", (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "not logged in" });
  }
  res.json({ ...req.user });
});

app.get("/api/logout", (req, res) => {
  req.logout();
  res.json({ action: "logged out" });
});

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../", "../", "../", "client", "build"))
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        "../",
        "../",
        "../",
        "client",
        "build",
        "index.html"
      )
    );
  });
}

const { port, dbUrl } = config;

mongoose
  .connect(dbUrl!, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
