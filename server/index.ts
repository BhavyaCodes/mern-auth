import express from "express";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";
import config from "./config";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ hello: "world" });
});

// app.post("/api/register", async (req, res, next) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 8);
//   } catch (error) {}
// });

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
