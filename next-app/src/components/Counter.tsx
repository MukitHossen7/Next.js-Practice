"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="flex items-center justify-center flex-col gap-3 min-h-screen">
      <div className="bg-amber-50 p-10">
        <p className="text-gray-800">Count: {count}</p>
        <button className="text-gray-800" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
