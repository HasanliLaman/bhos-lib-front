import React from "react";
import { useQuery } from "@tanstack/react-query";
import GenreElement from "../GenreElement";
import Container from "../../UI/Container";
import StyleGenreContainer from "./style";
import { getCategories } from "../../../server";

const GenreContainer = () => {
  const { data } = useQuery(["categories"], getCategories);

  return (
    <StyleGenreContainer>
      <Container>
        {data &&
          data.data.data.doc.map((el) => (
            <GenreElement
              key={el.slug}
              id={el.slug}
              img={el.image}
              text={el.name}
            />
          ))}
      </Container>
    </StyleGenreContainer>
  );
};

export default GenreContainer;
