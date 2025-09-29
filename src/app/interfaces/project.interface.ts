export interface IProject {
  title: string;
  thumbnail: string;
  projectLink: string;
  liveSite?: string;
  description: string;
  features: string[];
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
}
