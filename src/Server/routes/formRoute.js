/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Form } from "../modules/formModule.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const secretKey = crypto.randomBytes(32).toString("hex");
console.log(`Secret Key: ${secretKey}`);

router.post("/submit-form", async (req, res) => {
  try {
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.status(500).send("All fields required!");
    }
    const newPerson = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    };

    //hash the pass
    const hashPass = await bcrypt.hash(req.body.password, 10);
    newPerson.password = hashPass;
    const person = await Form.create(newPerson);
    return res.status(201).send(person);
  } catch (err) {
    console.log(err.message);
  }
  // create token
  try {
    const secretKey = process.env.SECRET_KEY;
  } catch (err) {
    console.log(err.message);
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
    res.status(200).send("successfully updated", person);
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not update.");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Form.findByIdAndDelete(id);
    res.status(200).send(`${person} Successfully deleted.`);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

export default router;
