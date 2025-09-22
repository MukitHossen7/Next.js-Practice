export interface IBlogPost {
  id: number;
  authorId: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  author: IUser;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  views: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  picture?: string;
  isVerified?: boolean;
}
