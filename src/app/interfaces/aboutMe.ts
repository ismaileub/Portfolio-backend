export interface IAboutMe extends Document {
  name: string;
  bio: string; // rich-text HTML
  email: string;
  phone?: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description?: string;
  }[];
  education: { degree: string; institute: string; year: string }[];
  workHistory: {
    role: string;
    company: string;
    duration: string;
    description?: string;
  }[];
  socialLinks?: { platform: string; url: string }[];
}
