import Event from "./components/Event";

export const metadata = {
  title: "Default | Next.js Blog",
  description: "This is a simple Next.js blog.",
};
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Home page</h1>
      <Event></Event>
    </div>
  );
};

export default Home;
