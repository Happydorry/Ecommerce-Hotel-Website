/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
import Form from "./modules/formModule";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (e) {
    console.log("Mongodb connection error:", e.messsage);
  }
};

module.exports = connectdb;
