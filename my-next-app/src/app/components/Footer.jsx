"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  return (
    <div>
      {pathName === "/about" ||
      pathName === "/about/company" ||
      pathName === "/about/emplyee" ? null : (
        <div>
          <p className="text-center text-gray-100 py-3 text-sm">
            &copy; 2021 Next.js Tailwind CSS Starter. All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
