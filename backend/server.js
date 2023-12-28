import express from "express";
import dotenv from "dotenv";

import app from "./app.js";
import connectDb from "./config/connectDb.js";

dotenv.config();

const port = process.env.PORT;

connectDb();

app.listen(port, (req, res) => {
  console.log(port);
});
