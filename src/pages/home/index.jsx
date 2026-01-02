import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Posts from "./Posts";
import Hero from "./Hero";
import Section from "@components/Section";

const Home = () => {
  return (
    <>
      <Hero />
      <Section.Container>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Posts />
      </Section.Container>
    </>
  );
};

export default Home;