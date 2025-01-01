import mongoose from "mongoose";

export function DBConnect(){
    return mongoose.connect(process.env.DB_LINK);
}