"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <FadeLoader color="#1728eb" />
      </div>
    );
  }
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <p className="text-2xl text-center py-2">{post.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
