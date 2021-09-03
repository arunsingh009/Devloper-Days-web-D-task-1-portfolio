import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar title="Arun Singh" />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
