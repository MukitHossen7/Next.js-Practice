"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createBlog = async (formData: FormData) => {
  const session = await getUserSession();
  const rawFormData = Object.fromEntries(formData.entries());
  const blogData = {
    title: rawFormData.title,
    content: rawFormData.content,
    thumbnail: rawFormData.thumbnail,
    isFeatured: Boolean(rawFormData.isFeatured),
    authorId: session?.user.id,
    tags: rawFormData.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
  };

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  if (result.status === 201) {
    revalidateTag("BLOGS");
    redirect("/blogs");
  } else {
    throw new Error("Failed to create blog");
  }
};
