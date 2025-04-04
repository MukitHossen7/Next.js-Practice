"use client";
import Image from "next/image";
import Link from "next/link";
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
  const handleDelete = async (deleteId) => {
    console.log(deleteId);
    const response = await fetch(
      `http://localhost:3000/api/get_post/${deleteId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data.success) {
      alert("Post Deleted Successfully");
      const filterData = post.filter((value) => value._id !== deleteId);
      setPost(filterData);
    } else {
      alert("Error Deleted Post");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20 px-10">
      {post.map((value) => (
        <div
          key={value._id}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
        >
          <div>
            <Image
              alt={value.name}
              src={value.image}
              height={400}
              width={400}
            ></Image>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{value?.name}</h2>
          <p className="text-gray-600 mt-2">
            by <span className="font-semibold">{value?.author_name}</span>
          </p>
          <p className="text-gray-500 text-sm">{value?.email}</p>
          <p className="text-lg font-semibold text-green-600 mt-4">
            Price: ${value?.price}
          </p>
          <Link href={`post/${value._id}`}>
            <button className="bg-teal-600 px-4 py-2 rounded-md">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(value._id)}
            className="bg-red-500 px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
