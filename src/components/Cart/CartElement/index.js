import React from "react";
import Button from "../../UI/Button";
import StyleCartElement from "./style";

const CartElement = (props) => {
  const { status, book, date } = props;

  return (
    <StyleCartElement>
      <img src={book.cover} alt="book cover" />
      <article>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <span>{new Date(date).toLocaleDateString()}</span>
        <p className={`status ${status}`}>{status.toUpperCase()}</p>
        <Button
          className={status === "in-use" ? "" : "disabled"}
          text="Request Return"
        />
      </article>
    </StyleCartElement>
  );
};

export default CartElement;
