import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  status: {
    es: { type: String, required: true },
    en: { type: String, required: true },
  },
  description: {
    es: { type: String, required: true },
    en: { type: String, required: true },
  },
});
export default model("Employee", employeeSchema);
