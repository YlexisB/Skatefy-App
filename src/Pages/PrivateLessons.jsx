import React from "react";
import { privateLessons } from "../data/lessonsData";
import Lesson from "../Components/Lessons/Lesson";
import LessonBenefits from "../Components/Lessons/LessonBenefits";
import PriceCards from "../Components/Lessons/PriceCards";
import { privateBenefits } from "../data/lessonsData2";
import { privatePrice } from "../data/pricesData";
import PrivateLHero from "../Components/PrivateLHero";
import FAQ from "../Components/FAQ";
import Join from "../Components/Join/Join";
import Footer from "../Components/Footer";

const PrivateLessons = () => {
  return (
    <div>
      <PrivateLHero />
      <Lesson {...privateLessons} />
      <LessonBenefits {...privateBenefits} />
      <PriceCards {...privatePrice} />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
};

export default PrivateLessons;
