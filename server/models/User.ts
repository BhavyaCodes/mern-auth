import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: string;
  imageUrl: string;
  age: number;
  phoneNumber: string;
  address: string;
}

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
    default: "/default-image.jpg",
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);
