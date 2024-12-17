import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <Bot />
    </div>
  );
};

export default App;