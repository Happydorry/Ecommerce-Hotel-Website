/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Form } from "./modules/formModule.js";
import formRoute from "./routes/formRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Everything good!");
});

//middleware
app.use("/form", formRoute);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("App connected to Mongo");
    app.listen(PORT, () => console.log("App listening on port 8000"));
  })
  .catch((err) => {
    console.log(err.message);
  });
