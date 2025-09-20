import Image from "next/image";
import blogImg from "@/assets/image2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App - Blog",
  description: "This is Blog page",
};
const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">This is Blog Page</h1>
      <Image
        src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
        alt="remote image"
        width={500}
        height={500}
        className="mx-auto"
      />

      <Image
        src="/image2.jpg"
        alt="remote image"
        width={500}
        height={500}
        className="mx-auto mt-2"
      />

      <Image
        src={blogImg}
        alt="remote image"
        width={500}
        height={500}
        className="mx-auto mt-2"
      />
    </div>
  );
};

export default BlogPage;
