import passport from "passport";
import { compare as bcryptCompare } from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/User";
import { IUser } from "../../interfaces";

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  User.findById(_id)
    .lean()
    .then((user) => {
      if (user) {
        done(null, {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          dob: user.dob,
        });
      }
    })
    .catch((e) => {
      done(e);
    });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    User.findOne({ email }, async function (err: Error, user: IUser) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      const matchPassword = await bcryptCompare(password, user.password);
      if (!matchPassword) {
        return done(null, false);
      }
      return done(null, user.toObject());
    });
  })
);
