"use client";
import { useRouter } from "next/navigation";

const Button = ({ buttonName, link }: { buttonName: string; link: string }) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`${link}`);
  };
  return (
    <div>
      <button onClick={handleNavigation}>{buttonName}</button>
    </div>
  );
};

export default Button;
