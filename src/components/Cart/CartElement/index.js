import React from "react";
import bookImg from "../../../assets/images/book-cover.jpg";
import Button from "../../UI/Button";
import StyleCartElement from "./style";

const CartElement = (props) => {
  const { status } = props;

  return (
    <StyleCartElement>
      <img src={bookImg} alt="book cover" />
      <article>
        <h2>Vampire Sire 2</h2>
        <p>Laman Hasanli</p>
        <span>09.11.2001</span>
        <p className={`status ${status}`}>{status.toUpperCase()}</p>
        <Button text="Request Return" />
      </article>
    </StyleCartElement>
  );
};

export default CartElement;
