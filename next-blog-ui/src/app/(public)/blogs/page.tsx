import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlogPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Blog | All Blogs",
  description:
    "Discover insightful articles, tutorials, and stories on Next Blog. Stay updated with the latest blogs across technology, programming, lifestyle, and more.",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto my-10">
        {blogs.map((post: IBlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
