import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 30,
    title: "SMS Developer",
    content:
      "Best practices for sustainable and green-friendly web development",
    thumbnail:
      "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    isFeatured: true,
    tags: ["React", "Next"],
    views: 1,
    authorId: 3,
    createdAt: "2025-09-22T17:08:53.059Z",
    updatedAt: "2025-09-22T17:23:43.586Z",
    author: {
      name: "Mir Ali Hossen",
      email: "raju7@gmail.com",
      picture: null,
    },
  },
];

export async function GET() {
  return Response.json(blogs);
}

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };
  blogs.push(newBlog);
  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
