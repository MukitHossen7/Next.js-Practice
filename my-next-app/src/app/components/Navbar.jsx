import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center gap-4 bg-gray-100 text-gray-800 py-3 px-10">
        <Link href="/">Default</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
};

export default Navbar;
