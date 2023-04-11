import React from "react";
import StyleGenreElement from "./style";

const GenreElement = ({ img, text }) => {
  return (
    <StyleGenreElement>
      <img alt="genre" src={img} />
      <p>{text}</p>
    </StyleGenreElement>
  );
};

export default GenreElement;
