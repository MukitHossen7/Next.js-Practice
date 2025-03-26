import { connectionString } from "@/lib/database/db_connection";
import { BlogPostModel } from "@/lib/database/model/blog_post_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, res) => {
  const idValue = res.params.postId;
  const id = { _id: idValue };
  const payload = await req.json();
  await mongoose.connect(connectionString);
  const updatePost = await BlogPostModel.findOneAndUpdate(id, payload);
  return NextResponse.json({ success: true });
};

export const GET = async (req, res) => {
  const getId = res.params.postId;
  const id = { _id: getId };
  await mongoose.connect(connectionString);
  const getPost = await BlogPostModel.findById(id);
  return NextResponse.json(getPost);
};
