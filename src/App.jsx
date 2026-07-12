import React from "react";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";

const App = () => {
  return (
    <div className="relative overflow-hidden min-h-screen min-w-full bg-zinc-950 text-[#E0E0E0]">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
