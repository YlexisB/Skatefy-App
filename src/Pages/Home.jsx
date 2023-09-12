import React from "react";
import HeroNav from "../Components/HeroNav";
import Offer from "../Components/Offer";
import About from "../Components/About";
import OurStudents from "../Components/Students/OurStudents";
import Ourteam from "../Components/Ourteam";

const Home = () => {
  return (
    <div>
      <HeroNav />
      <Offer />
      <About />
      <OurStudents />
      <Ourteam />
    </div>
  );
};

export default Home;
