import React from "react";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Hero />
      <>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Posts />
      </>
    </>
  );
};

export default Home;