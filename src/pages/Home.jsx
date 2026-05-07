import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col gap-20 sm:gap-32 pb-20">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
