import React from "react";
import HeroNav from "../Components/HeroNav";
import Offer from "../Components/Offer";
import About from "../Components/About";
import OurStudents from "../Components/Students/OurStudents";
import Ourteam from "../Components/Ourteam";
import FAQ from "../Components/FAQ";
import Join from "../Components/Join/Join";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <HeroNav />
      <Offer />
      <About />
      <OurStudents />
      <Ourteam />
      <FAQ />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
