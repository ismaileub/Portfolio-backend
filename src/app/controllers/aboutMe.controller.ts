// routes/about.ts
import express, { Request, Response } from "express";
import checkAdmin from "../helpers/checkAdmin";
import aboutMe from "../models/AboutMe";

const aboutMeRouter = express.Router();

// GET /api/about - public
aboutMeRouter.get("/", async (req: Request, res: Response) => {
  try {
    const about = await aboutMe.findOne();
    if (!about) return res.status(404).json({ message: "About Me not found" });
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT /api/about - private admin
aboutMeRouter.put("/", checkAdmin, async (req: Request, res: Response) => {
  try {
    const about = await aboutMe.findOne();
    if (!about) {
      const newAbout = new aboutMe(req.body);
      await newAbout.save();
      return res.json(newAbout);
    }
    Object.assign(about, req.body);
    await about.save();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default aboutMeRouter;
