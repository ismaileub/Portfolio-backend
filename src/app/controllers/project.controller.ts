import { Request, Response, Router } from "express";
import { Project } from "../models/project.model";
import checkAdmin from "../helpers/checkAdmin";

const projectRoute = Router();

//  Get all projects
projectRoute.get("/", async (req: Request, res: Response) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
});

//  Get single project by ID
projectRoute.get("/:id", async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: "Invalid project ID", error });
  }
});

//  Create project (admin)
projectRoute.post("/", checkAdmin, async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: "Failed to create project", error });
  }
});

//  Update project (admin)
projectRoute.put("/:id", checkAdmin, async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: "Failed to update project", error });
  }
});

//  Delete project (admin)
projectRoute.delete("/:id", checkAdmin, async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete project", error });
  }
});

export default projectRoute;
