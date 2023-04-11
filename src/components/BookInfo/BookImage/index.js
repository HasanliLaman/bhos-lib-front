import React from "react";
import StyleBookImage from "./style";

const BookImage = ({ image }) => {
  return (
    <StyleBookImage>
      <img src={image} alt="book-cover" />
    </StyleBookImage>
  );
};

export default BookImage;
