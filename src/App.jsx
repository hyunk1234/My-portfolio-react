import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
