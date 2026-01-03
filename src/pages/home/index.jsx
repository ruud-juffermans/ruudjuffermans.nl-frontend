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
    <div id={"home"}>
        <Hero/>
      <Section.Container>
        <About id={"about"} />
        <Skills id={"skills"} />
        <Experience id={"experience"} />
        <Projects id={"projects"} />
        <Posts id={"posts"} />
      </Section.Container>
    </ div>
  );
};

export default Home;