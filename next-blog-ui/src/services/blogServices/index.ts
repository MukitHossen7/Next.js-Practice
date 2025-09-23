export const getBlogById = async (blogId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${Number(blogId)}`
  );
  const data = await res.json();
  return data;
};
