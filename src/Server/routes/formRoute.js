import { Form } from "../modules/formModule.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const people = await Form.find({});
    return res.status(200).send(people);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Form.findByIdAndUpdate(id);
    res.status(200).send("successfully updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not update.");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Form.findByIdAndDelete(id);
    res.status(200).send("Successfully deleted.");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

export default router;
