import React from "react";

import { beyondBeginner } from "../data/lessonsData";
import Lesson from "../Components/Lessons/Lesson";
import LessonBenefits from "../Components/Lessons/LessonBenefits";
import PriceCards from "../Components/Lessons/PriceCards";
import { beyondBeginnerBenefits } from "../data/lessonsData2";
import { beyondBeginnerPrice } from "../data/pricesData";
import FAQ from "../Components/FAQ";
import Join from "../Components/Join/Join";
import Footer from "../Components/Footer";
import BeyondHero from "../Components/BeyondHero";

const BeyondBeginner = () => {
  return (
    <div>
      <BeyondHero />
      <Lesson lessonData={beyondBeginner} />
      <LessonBenefits lessonData2={beyondBeginnerBenefits} />
      <PriceCards lessonPrice={beyondBeginnerPrice} />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
};

export default BeyondBeginner;
