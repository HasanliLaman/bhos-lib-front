import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import GenreElement from "../GenreElement";
import Container from "../../UI/Container";
import Header from "../../UI/Header";
import { getCategories } from "../../../server";
import StyleGenreSlider from "./style";

import "swiper/css";
import "swiper/css/navigation";

const GenreSlider = () => {
  const { data } = useQuery(["categories"], getCategories);

  return (
    <StyleGenreSlider>
      <Container>
        <Header title="Categories" to="categories" />
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {data &&
            data.data.data.doc.map((el) => (
              <SwiperSlide key={el.slug}>
                <GenreElement id={el.slug} text={el.name} img={el.image} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </StyleGenreSlider>
  );
};

export default GenreSlider;
