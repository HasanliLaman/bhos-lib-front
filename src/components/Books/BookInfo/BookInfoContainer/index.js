import React from "react";
import BookInfoArticle from "../BookInfoArticle";
import StyleBookInfoContainer from "./style";
import book from "../../../../assets/images/book-cover.jpg";

const BookInfoContainer = ({ isHorizontal }) => {
  return (
    <StyleBookInfoContainer
      className={isHorizontal ? "horizontal" : "vertical"}
    >
      <img alt="Book cover" src={book} />
      <BookInfoArticle />
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
