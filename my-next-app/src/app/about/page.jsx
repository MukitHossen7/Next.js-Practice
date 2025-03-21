"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-2">
        Welcome to the About page. This is a simple page that does not have any
        functionality. It is just a placeholder for the About page.
      </p>
      <button
        onClick={() => router.push("about/company")}
        className="bg-blue-700 px-4 py-2"
      >
        Company
      </button>
    </div>
  );
};

export default About;
