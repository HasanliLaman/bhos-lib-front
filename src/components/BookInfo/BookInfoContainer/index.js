import React from "react";
import StyleBookInfoContainer from "./style";
import Container from "../../UI/Container";
import BookImage from "../BookImage";
import BookInfoArticle from "../BookInfoArticle";

const BookInfoContainer = ({ data }) => {
  return (
    <StyleBookInfoContainer>
      <Container>
        <BookImage image={data.data.data.doc.cover} />
        <BookInfoArticle info={data.data.data.doc} />
      </Container>
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
