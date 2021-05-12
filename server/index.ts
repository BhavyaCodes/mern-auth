import express from "express";
import mongoose from "mongoose";
const app = express();

import config from "./config";

app.get("/", (req, res, next) => {
  res.json({ hello: "world" });
});

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
