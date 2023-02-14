import React from "react";
import BookInfoArticle from "../BookInfoArticle";
import StyleBookInfoContainer from "./style";
import book from "../../../../assets/images/book-cover.jpg";

const BookInfoContainer = ({ isVertical }) => {
  return (
    <StyleBookInfoContainer className={isVertical ? "vetical" : "horizontal"}>
      <img alt="Book cover" src={book} />
      <BookInfoArticle />
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
