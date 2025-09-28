import mongoose, { Schema } from "mongoose";
import { IBlog } from "../interfaces/blog.interface";

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },

    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    thumbnail: { type: String },
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
