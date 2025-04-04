import { Roboto } from "next/font/google";

export const metadata = {
  title: "Home",
  description: "This is a Home page.",
};
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const Home = () => {
  return (
    <div className={`main ${roboto.className}`}>
      <h2 className="text-2xl font-bold">Home</h2>
      <p className="mt-2">
        Welcome to the Home page. This is a simple page that does not have any
        functionality. It is just a placeholder for the Home page.
      </p>
    </div>
  );
};

export default Home;
