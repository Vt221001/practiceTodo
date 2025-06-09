import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); 
  }
};
