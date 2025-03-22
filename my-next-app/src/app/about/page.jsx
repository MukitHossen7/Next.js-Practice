"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// export const metadata = {
//   title: "Home",
//   description: "This is a Home page.",
// };
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      <p className="mt-2">
        Welcome to the About page. This is a simple page that does not have any
        functionality. It is just a placeholder for the About page.
      </p>
      <div className="flex gap-3 flex-row mt-4">
        <button
          onClick={() => router.push("about/company")}
          className="bg-blue-700 px-4 py-2"
        >
          Company
        </button>
        <Link href="/about/emplyee">
          <button className="bg-blue-700 px-4 py-2">Employee</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
