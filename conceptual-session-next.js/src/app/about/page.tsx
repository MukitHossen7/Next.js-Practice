import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">This About Page</h1>
      <Link href="/intercepting">
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default AboutPage;
