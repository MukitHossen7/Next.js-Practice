"use client";

import { useEffect, useState } from "react";

const Details = ({ params }) => {
  const { details } = params;
  const [posts, setPosts] = useState({});
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${details}`
    );
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </div>
  );
};

export default Details;
