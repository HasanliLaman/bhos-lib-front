import React from "react";
import StyleBookInfoContainer from "./style";
import Container from "../../UI/Container";
import BookImage from "../BookImage";
import BookInfoArticle from "../BookInfoArticle";

const BookInfoContainer = () => {
  return (
    <StyleBookInfoContainer>
      <Container>
        <BookImage />
        <BookInfoArticle />
      </Container>
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
