import { Document } from "mongoose";

export interface CustomError extends Error {
  statusCode?: number;
  data?: any;
}

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

declare global {
  namespace Express {
    interface User {
      email: string;
      _id: string;
    }
  }
}
