import { Schema, Document, model } from "mongoose";

import { IUser } from "../../interfaces";

const userSchema: Schema = new Schema(
  {
    firstName: {
      required: true,
      type: String,
      trim: true,
      lowercase: true,
    },
    lastName: {
      required: true,
      type: String,
      trim: true,
      lowercase: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 100,
    },
    password: {
      required: true,
      type: String,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
