import React from "react";
import StyleBanner from "./style";
import Container from "../../UI/Container";
import arrow from "../../../assets/images/icon-chevron-right.svg";

const Banner = ({ current }) => {
  return (
    <StyleBanner>
      <Container>
        <h1>{current}</h1>
        <div>
          <a href="">Home</a>
          <img src={arrow} alt="arrow" />
          <p>{current}</p>
        </div>
      </Container>
    </StyleBanner>
  );
};

export default Banner;
