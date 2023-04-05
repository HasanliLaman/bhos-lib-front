import React from "react";
import book from "../../../assets/images/book-cover.jpg";
import StyleBookImage from "./style";

const BookImage = () => {
  return (
    <StyleBookImage>
      <img src={book} alt="book-cover" />
    </StyleBookImage>
  );
};

export default BookImage;
