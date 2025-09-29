import { Request, Response, Router } from "express";
import { Blog } from "../models/blog.model";
import checkAdmin from "../helpers/checkAdmin";

const blogRoute = Router();

// ✅ Public - View all blogs
blogRoute.get("/", async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
});

blogRoute.get("/:id", async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: "Invalid blog ID", error });
  }
});

blogRoute.post("/", checkAdmin, async (req: Request, res: Response) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog", error });
  }
});

// ✅ Admin - Update blog by ID
blogRoute.put("/:id", checkAdmin, async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated doc
      runValidators: true, // validate against schema
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: "Failed to update blog", error });
  }
});

// ✅ Admin - Delete blog by ID
blogRoute.delete("/:id", checkAdmin, async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete blog", error });
  }
});

export default blogRoute;
