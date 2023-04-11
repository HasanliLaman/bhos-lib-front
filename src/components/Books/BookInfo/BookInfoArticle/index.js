import React from "react";
import RatingContainer from "../../../UI/Rating/RatingContainer";
import StyleBookInfoArticle from "./style";
import { Link } from "react-router-dom";

const BookInfoArticle = ({ name, author, id }) => {
  return (
    <StyleBookInfoArticle>
      <Link to={`/books/${id}`}>{name}</Link>
      <RatingContainer rating={4} />
      <span>{author}</span>
    </StyleBookInfoArticle>
  );
};

export default BookInfoArticle;
