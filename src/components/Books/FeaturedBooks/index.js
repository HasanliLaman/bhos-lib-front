import React from "react";
import Container from "../../UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import StyleFeaturedBooks from "./style";
import BookInfoContainer from "../BookInfo/BookInfoContainer";

import "swiper/css";
import "swiper/css/navigation";

const FeaturedBooks = ({ data }) => {
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
          {data &&
            data.data.data.doc
              .filter((el, i) => i < 18 && i > 9)
              .map((el) => (
                <SwiperSlide key={el._id}>
                  <BookInfoContainer
                    img={el.cover}
                    id={el._id}
                    name={el.title}
                    author={el.author}
                    isHorizontal={true}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </StyleFeaturedBooks>
  );
};

export default FeaturedBooks;
