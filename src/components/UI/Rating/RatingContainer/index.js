import React from "react";
import StyleStarContainer from "./style";
import RatingStar from "../RatingStar";

const RatingContainer = ({ rating }) => {
  return (
    <StyleStarContainer>
      <ul>
        {[...Array(Math.round(rating))].map((el, i) => (
          <RatingStar key={i} active={true} />
        ))}
        {[...Array(5 - Math.round(rating))].map((el, i) => (
          <RatingStar key={i} />
        ))}
      </ul>
      <p>{rating}</p>
    </StyleStarContainer>
  );
};

export default RatingContainer;
