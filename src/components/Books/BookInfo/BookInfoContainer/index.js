import React from "react";
import BookInfoArticle from "../BookInfoArticle";
import StyleBookInfoContainer from "./style";
import { Link } from "react-router-dom";

const BookInfoContainer = ({ isHorizontal, img, name, author, id }) => {
  return (
    <StyleBookInfoContainer
      className={isHorizontal ? "horizontal" : "vertical"}
    >
      <Link to={`/books/${id}`}>
        <img
          className={isHorizontal ? "horizontal-image" : "vertical-image"}
          alt="Book cover"
          src={img}
        />
      </Link>
      <BookInfoArticle name={name} author={author} id={id} />
    </StyleBookInfoContainer>
  );
};

export default BookInfoContainer;
