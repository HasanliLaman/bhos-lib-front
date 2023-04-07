import React from "react";
import BookInfoArticle from "../BookInfoArticle";
import StyleBookInfoContainer from "./style";
import book from "../../../../assets/images/book-cover.jpg";
import { Link } from "react-router-dom";

const BookInfoContainer = ({ isHorizontal }) => {
  return (
    <StyleBookInfoContainer
      className={isHorizontal ? "horizontal" : "vertical"}
    >
      <Link to="/books">
        <img alt="Book cover" src={book} />
      </Link>
      <BookInfoArticle />
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
