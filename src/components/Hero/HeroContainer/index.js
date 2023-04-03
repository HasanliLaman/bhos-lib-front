import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Container from "../../UI/Container";
import HeroElement from "../HeroElement";
import hero1 from "../../../assets/images/hero-1.png";
import hero2 from "../../../assets/images/hero-2.png";
import StyleHeroContainer from "./style";

import "swiper/css";
import "swiper/css/pagination";

const HeroContainer = () => {
  return (
    <StyleHeroContainer>
      <div className="props-left"></div>
      <div className="props-right"></div>
      <div className="props-bottom"></div>
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HeroElement
              img={hero1}
              text="Editor choice"
              title="Top 10 books of year"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroElement
              img={hero2}
              text="Editor choice"
              title="Top 10 books of year"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </StyleHeroContainer>
  );
};

export default HeroContainer;
