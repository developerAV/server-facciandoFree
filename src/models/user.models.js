import { Schema, model } from "mongoose";
import Mission from "./mission.models.js";

const userSchema = new Schema({
  idUserFirebase: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  date_birth: {
    type: Date,
    require: true,
  },
  school: {
    type: String,
    default: "",
    require: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  actualLevel: {
    type: Number,
    default: 1,
  },
  actualMission: {
    type: Number,
    default: 1,
  },
  missions: {
    type: [Mission.schema],
    default: [],
    require: true,
  },
});

export default model("User", userSchema);
