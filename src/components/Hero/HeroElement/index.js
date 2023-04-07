import React from "react";
import StyleHeroElement from "./style";
import chevron from "../../../assets/images/icon-chevron-right.svg";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const HeroElement = ({ img, title, text }) => {
  return (
    <StyleHeroElement>
      <article>
        <p>{text}</p>
        <h1>{title}</h1>
        <Link to="/books">
          <Button
            text={
              <>
                <p>View All</p>
                <img alt="see more" src={chevron} />
              </>
            }
          />
        </Link>
      </article>
      <img src={img} alt="hero" />
    </StyleHeroElement>
  );
};

export default HeroElement;
