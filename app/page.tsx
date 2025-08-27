import Header from "./components/Home/Header";
import Experience from "./components/Home/Experience";
import Skills from "./components/Home/Skills";
import Achievement from "./components/Home/Achievement";
import Projects from "./components/Home/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Achievement />
      <Experience />
      <Projects />
    </>
  );
}
