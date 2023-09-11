import { Schema, model } from "mongoose";

const enEs = {
  type: String,
  required: true,
};

const missionSchema = new Schema({
  order: {
    type: Number,
    required: true,
  },
  name: {
    en: enEs,
    es: enEs,
  },
  levelId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  description: {
    en: enEs,
    es: enEs,
  },
  score: {
    type: Number,
    default: 0,
  },
  time: {
    type: Number,
    default: 0,
  },
});

export default model("Mission", missionSchema);
