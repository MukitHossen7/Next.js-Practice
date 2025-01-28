"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <ul className="flex justify-evenly items-center bg-gray-900 text-gray-100 py-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Navbar;
