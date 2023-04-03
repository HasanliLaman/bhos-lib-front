import React from "react";
import StyleHeroElement from "./style";
import chevron from "../../../assets/images/icon-chevron-right.svg";
import Button from "../../UI/Button";

const HeroElement = ({ img, title, text }) => {
  return (
    <StyleHeroElement>
      <article>
        <p>{text}</p>
        <h1>{title}</h1>
        <Button
          text={
            <>
              <p>View All</p>
              <img alt="see more" src={chevron} />
            </>
          }
        />
      </article>
      <img src={img} alt="hero" />
    </StyleHeroElement>
  );
};

export default HeroElement;
