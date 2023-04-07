import React from "react";
import StyleBanner from "./style";
import Container from "../../UI/Container";
import arrow from "../../../assets/images/icon-chevron-right.svg";
import { Link } from "react-router-dom";

const Banner = ({ current }) => {
  return (
    <StyleBanner>
      <Container>
        <h1>{current}</h1>
        <div>
          <Link to="/">Home</Link>
          <img src={arrow} alt="arrow" />
          <p>{current}</p>
        </div>
      </Container>
    </StyleBanner>
  );
};

export default Banner;
