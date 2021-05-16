import { RequestHandler } from "express";

export const isLoggedIn: RequestHandler = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.status(401).send({ error: "unauthorized" });
};
