import React from "react";
import Container from "../../UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import StyleFeaturedBooks from "./style";
import BookInfoContainer from "../BookInfo/BookInfoContainer";

import "swiper/css";
import "swiper/css/navigation";

const FeaturedBooks = () => {
  return (
    <StyleFeaturedBooks>
      <Container>
        <h2>Featured Books</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
          <SwiperSlide>
            <BookInfoContainer />
          </SwiperSlide>
        </Swiper>
      </Container>
    </StyleFeaturedBooks>
  );
};

export default FeaturedBooks;