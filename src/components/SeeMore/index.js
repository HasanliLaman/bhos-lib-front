import React from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import chevron from "../../assets/images/icon-chevron-right.svg";
import StyleSeeMore from "./style";

const SeeMore = () => {
  return (
    <StyleSeeMore>
      <Container>
        <p>The best Of 2021</p>
        <p>Up to 30% off top reads</p>
        <Button
          type="secondary"
          text={
            <>
              <p>See More</p>
              <img alt="see more" src={chevron} />
            </>
          }
        />
      </Container>
    </StyleSeeMore>
  );
};

export default SeeMore;
