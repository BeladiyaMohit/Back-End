// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({ path: "../env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error : ", error);
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is starting on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connected failed :", err);
  });

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
