import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";
import config from "./config";
import User from "./models/User";

import { CustomError } from "./interfaces";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ hello: "world" });
});

app.post("/api/register", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error: CustomError = new Error(
        "an account with this email already exists"
      );
      error.statusCode = 409;
      throw error;
    }

    const newUser = await User.create({
      email,
      password,
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    next(error);
  }
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

const { port, dbUrl } = config;

mongoose
  .connect(dbUrl, {
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
