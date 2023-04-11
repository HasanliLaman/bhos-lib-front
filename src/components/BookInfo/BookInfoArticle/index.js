import React from "react";
import { Link } from "react-router-dom";
import StockStatusBadge from "../StockStatusBadge";
import StyleBookInfoArticle from "./style";
import RatingContainer from "../../UI/Rating/RatingContainer";
import Button from "../../UI/Button";
import pdf from "../../../assets/files/pdf.pdf";

const BookInfoArticle = ({ info }) => {
  return (
    <StyleBookInfoArticle>
      <StockStatusBadge stocked={info.quantity} />
      <div className="book-details">
        <h2>{info.title}</h2>
        <div>
          <p>Author: {info.author}</p>
          <RatingContainer rating={4} />
        </div>
      </div>
      <div className="book-description">
        <h3>Description</h3>
        <p>{info.description}</p>
      </div>
      <div className="buttons">
        <Button
          className={info.quantity ? "" : "disabled"}
          text="Request Book"
          type="primary"
        />
        <a href={pdf} download>
          <Button text="Download PDF" />
        </a>
      </div>
      <div className="book-categories">
        <p>Categories:</p>
        <Link to={`/books?category=${info.category.slug}`}>
          {info.category.name}
        </Link>
      </div>
    </StyleBookInfoArticle>
  );
};

export default BookInfoArticle;
