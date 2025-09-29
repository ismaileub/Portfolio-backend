import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

interface JwtPayload {
  email: string;
}

const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.admin_token; // token stored in cookie
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    const isAdmin = await User.findOne({ email: decoded.email });
    // Only check email
    if (!isAdmin) {
      return res.status(403).json({ message: "Access denied: Not admin" });
    }

    // req.user = decoded; // attach decoded info to req.user
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default checkAdmin;
