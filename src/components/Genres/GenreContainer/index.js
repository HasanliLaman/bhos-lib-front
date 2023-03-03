import React from "react";
import GenreElement from "../GenreElement";
import Container from "../../UI/Container";
import StyleGenreContainer from "./style";

const GenreContainer = () => {
  return (
    <StyleGenreContainer>
      <Container>
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
        <GenreElement />
      </Container>
    </StyleGenreContainer>
  );
};

export default GenreContainer;
