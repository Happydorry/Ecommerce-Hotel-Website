/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Form } from "./modules/formModule.js";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("Everything good!");
});

app.post("/form", async (req, res) => {
  try {
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.status(500).send("All fields required!");
    }
    const newPerson = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    };
    const person = await Form.create(newPerson);
    return res.status(201).send(person);
  } catch (err) {
    console.log(err);
  }
});

app.get("/form", async (req, res) => {
  try {
    const people = await Form.find({});
    return res.status(200).send(people);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.put("/form/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Form.findByIdAndUpdate(id);
    res.status(200).send("successfully updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not update.");
  }
});

app.delete("/form/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Form.findByIdAndDelete(id);
    res.status(200).send("Successfully deleted.");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("App connected to Mongo");
    app.listen(PORT, () => console.log("App listening on port 8000"));
  })
  .catch((err) => {
    console.log(err.message);
  });
