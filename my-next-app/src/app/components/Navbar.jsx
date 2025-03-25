import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center gap-4 bg-gray-100 text-gray-800 py-3 px-10">
        <Link href="/">Default</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/users">Users</Link>
        <Link href="/add_post">Add Post</Link>
        <Link href="/post">Post</Link>
      </nav>
    </>
  );
};

export default Navbar;
