import { connectionString } from "@/lib/database/db_connection";
import { BlogPostModel } from "@/lib/database/model/blog_post_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, res) => {
  const id = res.params.putId;
  const payload = await req.json();
  await mongoose.connect(connectionString);
  const updatePost = await BlogPostModel.findByIdAndUpdate(id, payload);
  return NextResponse.json({ success: true, data: updatePost });
};
