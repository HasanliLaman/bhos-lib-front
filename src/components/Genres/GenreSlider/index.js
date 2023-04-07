import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import GenreElement from "../GenreElement";
import Container from "../../UI/Container";
import Header from "../../UI/Header";
import StyleGenreSlider from "./style";

import "swiper/css";
import "swiper/css/navigation";

const GenreSlider = () => {
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
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
          <SwiperSlide>
            <GenreElement />
          </SwiperSlide>
        </Swiper>
      </Container>
    </StyleGenreSlider>
  );
};

export default GenreSlider;
