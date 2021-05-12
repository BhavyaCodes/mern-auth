import mongoose, { Schema, Document, model } from "mongoose";
import { UserInfo } from "os";

export interface IUser extends Document {
  // firstName: string;
  // lastName: string;
  email: string;
  password: string;
  // imageUrl: string;
  // age: number;
  // phoneNumber: string;
  // address: string;
}

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
