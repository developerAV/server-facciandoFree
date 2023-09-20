import { Schema, model } from "mongoose";

const enEs = {
  type: String,
  required: false,
};

const missionSchema = new Schema({
  order: {
    type: Number,
    required: false,
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
  completed: {
    type: Boolean,
    default: false,
  },
});

export default model("Mission", missionSchema);
