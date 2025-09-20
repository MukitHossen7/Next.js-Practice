/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          MyLogo
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <div>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search..."
              className="flex-grow outline-none"
            />
          </div>
          <Link
            href="/"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/product"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Product
          </Link>
          <Link
            href="/dashboard"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/dashboard"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/about"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/blog"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/contact"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className={`text-base font-medium transition-colors duration-200 ${
              pathname === "/login"
                ? "text-blue-500 underline underline-offset-4"
                : "text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4"
            }`}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
