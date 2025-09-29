import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/project.interface";

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, required: true },
    projectLink: { type: String, required: true },
    liveSite: { type: String },
    description: { type: String, required: true },
    features: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProject>("Project", projectSchema);
