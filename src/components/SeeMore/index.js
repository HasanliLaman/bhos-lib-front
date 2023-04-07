import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../UI/Container";
import Button from "../UI/Button";
import chevron from "../../assets/images/icon-chevron-right.svg";
import StyleSeeMore from "./style";

const SeeMore = () => {
  const navigate = useNavigate();
  return (
    <StyleSeeMore>
      <Container>
        <p>Read e-books</p>
        <p>Most books are downloadable</p>
        <Button
          type="secondary"
          onClick={() => navigate("/books")}
          text={
            <>
              <p>See More</p>
              <img alt="see more" src={chevron} />
            </>
          }
        />
      </Container>
    </StyleSeeMore>
  );
};

export default SeeMore;
