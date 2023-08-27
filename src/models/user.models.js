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
    level1: {
      completed: { type: Boolean, default: false },
      mision1: {
        type: Boolean,
        default: false,
      },
      mision2: {
        type: Boolean,
        default: false,
      },
      mision3: {
        type: Boolean,
        default: false,
      },
    },
    level2: {
      completed: { type: Boolean, default: false },
      mision4: {
        type: Boolean,
        default: false,
      },
      mision5: {
        type: Boolean,
        default: false,
      },
      mision6: {
        type: Boolean,
        default: false,
      },
    },
    level3: {
      completed: { type: Boolean, default: false },
      mision7: {
        type: Boolean,
        default: false,
      },
      mision8: {
        type: Boolean,
        default: false,
      },
      mision9: {
        type: Boolean,
        default: false,
      },
    },
    level4: {
      completed: { type: Boolean, default: false },
      mision10: {
        type: Boolean,
        default: false,
      },
      mision11: {
        type: Boolean,
        default: false,
      },
      mision12: {
        type: Boolean,
        default: false,
      },
    },
    level5: {
      completed: { type: Boolean, default: false },
      mision13: {
        type: Boolean,
        default: false,
      },
      mision14: {
        type: Boolean,
        default: false,
      },
      mision15: {
        type: Boolean,
        default: false,
      },
    },
    level6: {
      completed: { type: Boolean, default: false },
      mision16: {
        type: Boolean,
        default: false,
      },
      mision17: {
        type: Boolean,
        default: false,
      },
      mision18: {
        type: Boolean,
        default: false,
      },
    },
    level7: {
      completed: { type: Boolean, default: false },
      mision19: {
        type: Boolean,
        default: false,
      },
      mision20: {
        type: Boolean,
        default: false,
      },
      mision21: {
        type: Boolean,
        default: false,
      },
    },
    level8: {
      completed: { type: Boolean, default: false },
      mision22: {
        type: Boolean,
        default: false,
      },
      mision23: {
        type: Boolean,
        default: false,
      },
      mision24: {
        type: Boolean,
        default: false,
      },
    },
    level9: {
      completed: { type: Boolean, default: false },
      mision25: {
        type: Boolean,
        default: false,
      },
      mision26: {
        type: Boolean,
        default: false,
      },
      mision27: {
        type: Boolean,
        default: false,
      },
    },
  },
});

export default model("User", userSchema);
