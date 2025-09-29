import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

const adminRoute = express.Router();

adminRoute.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Find admin in MongoDB
    const admin = await User.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Sign JWT token
    const token = jwt.sign(
      { email: admin.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // 4️⃣ Send token as HTTP-only cookie
    res.cookie("admin_token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
    });

    res.json({ message: "Admin logged in successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default adminRoute;
