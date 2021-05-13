import passport from "passport";
import { compare as bcryptCompare } from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

import User, { IUser } from "../models/User";

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (email, password, done) {
    User.findOne({ email }, async function (err: Error, user: IUser) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }

      const matchPassword = await bcryptCompare(password, user.password);
      if (matchPassword) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
