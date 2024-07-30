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

    // create token

    const secretKey = process.env.SECRET_KEY;
    const user = {
      id: person.id,
      email: req.body.email,
    };
    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
    res.status(201).send({ person, token });
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(500).send("All fields required!");
    }

    //use Mongo to find the person
    const person = await Form.findOne({ email: req.body.email });

    //compare the passwords
    if (!person) {
      return res.status(404).send("User not found!");
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      person.password
    );

    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials!");
    }

    // create token

    const secretKey = process.env.SECRET_KEY;
    const user = {
      id: person.id,
      email: req.body.email,
    };
    const token = await jwt.sign(user, secretKey, { expiresIn: "1h" });
    res.status(201).send({ person, token });
  } catch (err) {
    console.log(err.message);
    res.status(404).send("User not found!");
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
