import mongoose, { Schema } from "mongoose";
import { IAboutMe } from "../interfaces/aboutMe";

const AboutMeSchema = new Schema<IAboutMe>(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    skills: [{ type: String }],
    experience: [
      {
        title: String,
        company: String,
        duration: String,
        description: String,
      },
    ],
    education: [
      {
        degree: String,
        institute: String,
        year: String,
      },
    ],
    workHistory: [
      {
        role: String,
        company: String,
        duration: String,
        description: String,
      },
    ],
    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.AboutMe ||
  mongoose.model<IAboutMe>("AboutMe", AboutMeSchema);
