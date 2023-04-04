import React from "react";
import StyleBooks from "./style";
import Banner from "../../components/UI/Banner";
import Container from "../../components/UI/Container";
import GenreList from "../../components/Genres/GenreList";
import BookGrid from "../../components/Books/BooksGrid";

const Books = () => {
  return (
    <StyleBooks>
      <Banner current="Explore Books" />
      <Container>
        <GenreList />
        <BookGrid />
      </Container>
    </StyleBooks>
  );
};

export default Books;
