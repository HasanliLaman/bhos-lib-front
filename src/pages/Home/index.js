import React from "react";
import NavbarContainer from "../../components/Navbar/NavContainer";
import SeeMore from "../../components/SeeMore";
import FooterContainer from "../../components/Footer/FooterContainer";
import TestimonialContainer from "../../components/Testimonials/TestimonialContainer";
import GenreSlider from "../../components/Genres/GenreSlider";
import BestBooksContainer from "../../components/Books/BestBooksContainer";
import FeaturedBooks from "../../components/Books/FeaturedBooks";
import DailyReads from "../../components/Books/DailyReads";
import HeroContainer from "../../components/Hero/HeroContainer";

const Home = () => {
  return (
    <div>
      <NavbarContainer />
      <HeroContainer />
      <BestBooksContainer />
      <GenreSlider />
      <FeaturedBooks />
      <DailyReads />
      <TestimonialContainer />
      <SeeMore />
      <FooterContainer />
    </div>
  );
};

export default Home;