/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType: {
    type: String,
  },
  capacity: {
    type: String,
  },
});

export const Room = mongoose.model("room", roomSchema);
