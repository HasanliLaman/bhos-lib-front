import React from "react";
import SeeMore from "../../components/SeeMore";
import TestimonialContainer from "../../components/Testimonials/TestimonialContainer";
import GenreSlider from "../../components/Genres/GenreSlider";
import BestBooksContainer from "../../components/Books/BestBooksContainer";
import FeaturedBooks from "../../components/Books/FeaturedBooks";
import DailyReads from "../../components/Books/DailyReads";
import HeroContainer from "../../components/Hero/HeroContainer";

const Home = () => {
  return (
    <div>
      <HeroContainer />
      <BestBooksContainer />
      <GenreSlider />
      <FeaturedBooks />
      <DailyReads />
      <TestimonialContainer />
      <SeeMore />
    </div>
  );
};

export default Home;
