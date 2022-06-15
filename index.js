import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import initRoute from "./Routes/InitRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// config route
initRoute(app);

mongoose
  .connect(process.env.CONNECT_DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("<<<<< Connected to database");
  });

app.listen(port, () => {
  console.log("<<<<< Server is start on port " + port);
});
