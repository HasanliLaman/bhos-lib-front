import React from "react";
import StockStatusBadge from "../StockStatusBadge";
import StyleBookInfoArticle from "./style";
import RatingContainer from "../../UI/Rating/RatingContainer";
import Button from "../../UI/Button";

const BookInfoArticle = () => {
  return (
    <StyleBookInfoArticle>
      <StockStatusBadge stocked={true} />
      <div className="book-details">
        <h2>Vampire Sire 2</h2>
        <div>
          <p>Author: Laman Hasanli</p>
          <RatingContainer rating={4} />
        </div>
      </div>
      <div className="book-description">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
          dolores ipsam! Eos, soluta commodi, accusamus consectetur harum sunt
          cum ad, ipsum laboriosam exercitationem eligendi animi voluptatibus
          sit quas non minus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iste id mollitia vitae provident atque ullam harum magnam
          voluptatum cumque quod.
        </p>
      </div>
      <div className="buttons">
        <Button text="Request Book" type="primary" />
      </div>
      <div className="book-categories">
        <p>Categories:</p>
        <a href="">Math</a>,<a href="">PAE</a>,<a href="">Geology</a>
      </div>
    </StyleBookInfoArticle>
  );
};

export default BookInfoArticle;
