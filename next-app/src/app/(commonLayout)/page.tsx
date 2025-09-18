import Button from "@/components/Button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Next.js Home page</h1>
      <Button buttonName="Dashboard" link="/dashboard" />
    </div>
  );
};

export default HomePage;
