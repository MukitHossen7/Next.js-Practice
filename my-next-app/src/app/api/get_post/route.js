import { connectionString } from "@/lib/database/db_connection";
import { BlogPostModel } from "@/lib/database/model/blog_post_model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionString);
  const postData = await BlogPostModel.find();

  return NextResponse.json(postData);
};
