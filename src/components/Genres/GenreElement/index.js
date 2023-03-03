import React from "react";
import StyleGenreElement from "./style";
import genreImg from "../../../assets/images/genre-image.png";

const GenreElement = () => {
  return (
    <StyleGenreElement>
      <img alt="genre" src={genreImg} />
      <p>Thriller</p>
    </StyleGenreElement>
  );
};

export default GenreElement;
