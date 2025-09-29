import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import adminRoute from "./app/controllers/admin.controller";
import blogRoute from "./app/controllers/blog.controller";
import projectRoute from "./app/controllers/project.controller";

const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/blog", blogRoute);
app.use("/api/admin", adminRoute);
app.use("/api/project", projectRoute);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
