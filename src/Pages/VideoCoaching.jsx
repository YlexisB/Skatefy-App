import React from "react";
import { videoCoaching } from "../data/lessonsData";
import Lesson from "../Components/Lessons/Lesson";
import LessonBenefits from "../Components/Lessons/LessonBenefits";
import PriceCards from "../Components/Lessons/PriceCards";
import { videoBenefits } from "../data/lessonsData2";
import { videoCoachingPrice } from "../data/pricesData";
// import PrivateLHero from "../Components/PrivateLHero";
import FAQ from "../Components/FAQ";
import Join from "../Components/Join/Join";
import Footer from "../Components/Footer";
import VideoCoachHero from "../Components/VideoCoachHero";

const VideoCoaching = () => {
  return (
    <div>
      <VideoCoachHero />
      <Lesson lessonData={videoCoaching} />
      <LessonBenefits lessonData2={videoBenefits} />
      <PriceCards lessonPrice={videoCoachingPrice} />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
};

export default VideoCoaching;
