import { Schema, Document, model } from "mongoose";

import { IUser } from "../interfaces";

const userSchema: Schema = new Schema({
  // firstName: {
  //   required: true,
  //   type: String,
  // },
  // lastName: {
  //   required: true,
  //   type: String,
  // },
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
  // imageUrl: {
  //   type: String,
  //   required: true,
  //   default: "/default-image.jpg",
  // },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // phoneNumber: {
  //   type: String,
  //   required: true,
  // },
  // address: {
  //   type: String,
  //   required: true,
  // },
});

const User = model<IUser>("User", userSchema);

export default User;
