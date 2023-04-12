import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import GenreElement from "../GenreElement";
import Container from "../../UI/Container";
import StyleGenreContainer from "./style";
import Loading from "../../UI/Loading";
import { getCategories } from "../../../server";

const GenreContainer = () => {
  const { data } = useQuery(["categories"], getCategories);

  return (
    <>
      {!data && <Loading style={{ padding: "6rem 0 " }} />}
      <StyleGenreContainer>
        <Container>
          {data &&
            data.data.data.doc.map((el) => (
              <Link key={el.slug} to={`/books?category=${el.slug}`}>
                <GenreElement id={el.slug} img={el.image} text={el.name} />
              </Link>
            ))}
        </Container>
      </StyleGenreContainer>
    </>
  );
};

export default GenreContainer;
