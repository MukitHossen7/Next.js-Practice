import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { IBlogPost } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();
  return blogs.map((post: IBlogPost) => ({
    blogId: String(post.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${Number(blogId)}`
  );
  const { data: blog } = await res.json();

  return {
    title: blog.title,
    description: blog.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${Number(blogId)}`
  );
  const { data: blog } = await res.json();
  return (
    <div className="py-28 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold text-center">Blog Details Page</h2>
      <div>
        <BlogDetailsCard blog={blog} />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
