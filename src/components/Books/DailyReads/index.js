import React from "react";
import Container from "../../UI/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import BookInfoContainer from "../BookInfo/BookInfoContainer";
import StyleDailyReads from "./style";

import "swiper/css";
import "swiper/css/navigation";
import Header from "../../UI/Header";

const DailyReads = ({ data }) => {
  return (
    <StyleDailyReads>
      <Container>
        <Header title="Daily Reads" to="/books" />
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {data &&
            data.data.data.doc
              .filter((el, i) => i < 35 && i > 18)
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
    </StyleDailyReads>
  );
};

export default DailyReads;
