import { Schema, model } from "mongoose";
const enEs = {
  type: String,
  required: true,
};
const levelSchema = new Schema({
  order: {
    type: Number,
    required: true,
  },
  name: {
    en: enEs,
    es: enEs,
  },
  description: {
    en: enEs,
    es: enEs,
  },
});

export default model("Level", levelSchema);
