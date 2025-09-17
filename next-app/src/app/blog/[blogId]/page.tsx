const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-4xl">This is Blog : {blogId}</h1>
    </div>
  );
};

export default BlogDetailsPage;
