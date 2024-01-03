import { Schema, model } from "mongoose";

const forumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
  },

  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [
    {
      content: { type: String },
      user: { type: Schema.Types.ObjectId, ref: "User" },
      date: { type: Date, default: Date.now },
    },
  ],
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  date: { type: Date, default: Date.now },
});

export default model("Forum", forumSchema);
