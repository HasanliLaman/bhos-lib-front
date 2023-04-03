import React from "react";
import Container from "../../UI/Container";
import BestRated from "../BestRated";
import MostViewed from "../MostViewed";
import StyleBestBooksContainer from "./style";

const BestBooksContainer = () => {
  return (
    <StyleBestBooksContainer>
      <Container>
        <BestRated />
        <MostViewed />
      </Container>
    </StyleBestBooksContainer>
  );
};

export default BestBooksContainer;
