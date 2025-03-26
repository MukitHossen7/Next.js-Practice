import mongoose from "mongoose";

const postModel = new mongoose.Schema({
  name: { type: String, required: true },
  author_name: { type: String, required: true },
  email: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export const BlogPostModel =
  mongoose.models.blogs || mongoose.model("blogs", postModel);
