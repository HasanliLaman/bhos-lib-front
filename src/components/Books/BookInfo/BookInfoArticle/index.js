import React from "react";
import RatingContainer from "../../../UI/Rating/RatingContainer";
import StyleBookInfoArticle from "./style";

const BookInfoArticle = () => {
  return (
    <StyleBookInfoArticle>
      <a href="">The Story of Success</a>
      <RatingContainer rating={5} />
      <span>Laman Hasanli</span>
    </StyleBookInfoArticle>
  );
};

export default BookInfoArticle;
