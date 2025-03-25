import { connectionString } from "@/lib/database/db_connection";
import { BlogPostModel } from "@/lib/database/model/blog_post_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const payload = await req.json();
  console.log(payload);
  await mongoose.connect(connectionString);
  const newPost = new BlogPostModel(payload);
  await newPost.save();
  return NextResponse.json({ massage: "success" });
};
