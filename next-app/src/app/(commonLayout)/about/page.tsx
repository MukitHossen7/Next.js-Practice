import style from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App - About",
  description: "This is About page",
};
const AboutPage = () => {
  return (
    <div>
      <h1 className={style.text_style}>This is About Page</h1>
    </div>
  );
};

export default AboutPage;
