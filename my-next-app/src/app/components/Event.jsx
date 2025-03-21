"use client";
import { useState } from "react";

const Event = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={handleClick}
        className="border-2 border-blue-600 px-4 py-1 rounded-lg"
      >
        Increment
      </button>
    </div>
  );
};

export default Event;
