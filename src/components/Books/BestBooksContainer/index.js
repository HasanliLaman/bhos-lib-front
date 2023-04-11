import React from "react";
import Container from "../../UI/Container";
import BestRated from "../BestRated";
import MostViewed from "../MostViewed";
import StyleBestBooksContainer from "./style";

const BestBooksContainer = ({ data }) => {
  return (
    <StyleBestBooksContainer>
      <Container>
        <BestRated data={data} />
        <MostViewed data={data} />
      </Container>
    </StyleBestBooksContainer>
  );
};

export default BestBooksContainer;
