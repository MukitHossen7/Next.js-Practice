import { connectionString } from "@/lib/database/db_connection";
import { BlogPostModel } from "@/lib/database/model/blog_post_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, res) => {
  const id = res.params.postId;
  const payload = await req.json();
  // await mongoose.connect(connectionString)
  // const updatePost = BlogPostModel
  console.log(payload);
  console.log(id);
  return NextResponse.json({ success: true });
};
