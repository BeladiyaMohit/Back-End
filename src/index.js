// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({ path: "../env" });

connectDB();

// import express from "express";

// const app=express()

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB}${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("error:",error);
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log("app is listening on port :",process.env.PORT);
//     })
//   } catch (error) {
//     console.log(error);
//     throw.error(error)
//   }
// })();
