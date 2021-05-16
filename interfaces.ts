import { Document } from "mongoose";

export interface CustomError extends Error {
  statusCode?: number;
  data?: any;
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;
  imageUrl: string | null;
}

declare global {
  namespace Express {
    interface User {
      email: string;
      _id: string;
      firstName: string;
      lastName: string;
      dob: Date;
      imageUrl: string | null;
    }
  }
}
