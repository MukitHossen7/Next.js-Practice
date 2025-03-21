"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
