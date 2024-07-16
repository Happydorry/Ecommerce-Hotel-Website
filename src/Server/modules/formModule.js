/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");
import connectdb from "../db";

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Form = mongoose.model("form", formSchema);
