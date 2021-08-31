import React from "react";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
