"use client";

import { useState } from "react";

const AddPost = () => {
  const [name, setName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const priceValue = Number(price);
    const postData = {
      name,
      author_name: authorName,
      email,
      price: priceValue,
    };
    const response = await fetch("http://localhost:3000/api/post_post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const responseData = await response.json();
    if (responseData.massage === "success") {
      alert("successful Add");
      setName("");
      setAuthorName("");
      setPrice("");
      setEmail("");
    } else [alert("Error")];
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white text-black shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Post Name"
            required
          />
          <input
            type="text"
            name="author_name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Author Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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

export default AddPost;
