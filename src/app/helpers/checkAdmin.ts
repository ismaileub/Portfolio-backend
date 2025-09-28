import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  email: string;
}

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.token; // token stored in cookie
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    // Only check email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied: Not admin" });
    }

    req.user = decoded; // attach decoded info to req.user
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default checkAdmin;
