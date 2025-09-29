export interface IBlog {
  _id?: string;
  title: string;
  content: string;
  tags: string[];
  thumbnail?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}
