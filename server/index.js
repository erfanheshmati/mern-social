import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

// routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
