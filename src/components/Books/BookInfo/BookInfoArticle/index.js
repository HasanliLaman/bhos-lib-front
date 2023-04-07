import React from "react";
import RatingContainer from "../../../UI/Rating/RatingContainer";
import StyleBookInfoArticle from "./style";
import { Link } from "react-router-dom";

const BookInfoArticle = () => {
  return (
    <StyleBookInfoArticle>
      <Link to="/books">The Story of Success</Link>
      <RatingContainer rating={5} />
      <span>Laman Hasanli</span>
    </StyleBookInfoArticle>
  );
};

export default BookInfoArticle;
