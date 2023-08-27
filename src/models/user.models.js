import { Schema, model } from "mongoose";

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
    require: true,
  },
  levelCompleted: {
    level1: { type: Boolean, default: false },
    level2: { type: Boolean, default: false },
    level3: { type: Boolean, default: false },
    level4: { type: Boolean, default: false },
    level5: { type: Boolean, default: false },
    level6: { type: Boolean, default: false },
    level7: { type: Boolean, default: false },
    level8: { type: Boolean, default: false },
    level9: { type: Boolean, default: false },
  },
});

export default model("User", userSchema);
