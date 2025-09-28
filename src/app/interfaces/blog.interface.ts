export interface IBlog {
  title: string;
  content: string;
  tags: string[];
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
}
