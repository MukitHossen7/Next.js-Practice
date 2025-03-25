"use client";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const fetchPostData = async () => {
    const respond = await fetch("http://localhost:3000/api/get_post");
    const data = await respond.json();
    setPost(data);
  };
  useEffect(() => {
    fetchPostData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20 px-10">
      {post.map((value) => (
        <div
          key={value._id}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800">{value?.name}</h2>
          <p className="text-gray-600 mt-2">
            by <span className="font-semibold">{value?.author_name}</span>
          </p>
          <p className="text-gray-500 text-sm">{value?.email}</p>
          <p className="text-lg font-semibold text-green-600 mt-4">
            Price: ${value?.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Post;
