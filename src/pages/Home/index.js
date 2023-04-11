import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import SeeMore from "../../components/SeeMore";
import TestimonialContainer from "../../components/Testimonials/TestimonialContainer";
import GenreSlider from "../../components/Genres/GenreSlider";
import BestBooksContainer from "../../components/Books/BestBooksContainer";
import FeaturedBooks from "../../components/Books/FeaturedBooks";
import DailyReads from "../../components/Books/DailyReads";
import HeroContainer from "../../components/Hero/HeroContainer";
import { getBooks } from "../../server";

const Home = () => {
  const { data } = useQuery(["books"], getBooks);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB";
  }, []);

  return (
    <div>
      <HeroContainer />
      <BestBooksContainer data={data} />
      <GenreSlider />
      <FeaturedBooks data={data} />
      <DailyReads data={data} />
      <TestimonialContainer />
      <SeeMore />
    </div>
  );
};

export default Home;
