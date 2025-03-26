"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePost = ({ params }) => {
  const [post, setPost] = useState({
    name: "",
    author_name: "",
    email: "",
    price: "",
  });
  const router = useRouter();
  const getSingleData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/get_post/${params?.update}`
    );
    const data = await response.json();
    setPost(data);
  };
  console.log(post);
  useEffect(() => {
    getSingleData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const priceValue = Number(post.price);
    const postData = {
      name: post.name,
      author_name: post.author_name,
      email: post.email,
      price: priceValue,
    };
    const response = await fetch(
      `http://localhost:3000/api/get_post/${params?.update}`,
      {
        method: "PUT",
        body: JSON.stringify(postData),
      }
    );
    const responseData = await response.json();
    if (responseData.success) {
      alert("successful Add");
      router.push("/post");
    } else [alert("Error")];
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white text-black shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Update Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Post Name"
            required
          />
          <input
            type="text"
            name="author_name"
            value={post.author_name}
            onChange={(e) => setPost({ ...post, author_name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Author Name"
            required
          />
          <input
            type="email"
            name="email"
            value={post.email}
            onChange={(e) => setPost({ ...post, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="price"
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Price"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
