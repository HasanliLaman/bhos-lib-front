import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooks, getCategories } from "../../server";
import StyleBooks from "./style";
import Banner from "../../components/UI/Banner";
import Container from "../../components/UI/Container";
import GenreList from "../../components/Genres/GenreList";
import BookGrid from "../../components/Books/BooksGrid";
import Loading from "../../components/UI/Loading";

const Books = () => {
  const books = useQuery(["books"], getBooks);
  const categories = useQuery(["categories"], getCategories);

  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Books";
  }, []);

  return (
    <StyleBooks>
      <Banner current="Explore Books" />
      <Container>
        <GenreList query={query} setQuery={setQuery} data={categories.data} />
        {!books.data && <Loading />}
        <BookGrid query={query} data={books.data} />
      </Container>
    </StyleBooks>
  );
};

export default Books;
