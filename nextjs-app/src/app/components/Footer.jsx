"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <div className="bg-gray-800 text-gray-200 py-4 text-center">
        <p>�� 2023 My Website. All rights reserved.</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Footer;
