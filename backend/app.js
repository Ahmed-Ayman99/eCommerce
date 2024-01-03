import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import productsRoutes from "./routes/productsRoutes.js";
import errorController from "./controllers/errorController.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("./public"));
app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    credentials: true,
  })
);

app.options("*", cors());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/products", productsRoutes);
app.use("/api/users", userRouter);

app.all("*", (req, _, next) => {
  const err = new Error(`Can't Find ${req.originalUrl}`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

app.use(errorController);

export default app;
