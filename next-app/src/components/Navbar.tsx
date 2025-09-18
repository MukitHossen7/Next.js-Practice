"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          MyLogo
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link href="/login" className="hover:text-blue-400">
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
