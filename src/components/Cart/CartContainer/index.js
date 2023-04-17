import React from "react";
import CartElement from "../CartElement";
import StyleCartContainer from "./style";
import Container from "../../UI/Container";

const CartContainer = ({ data }) => {
  console.log(data.books);
  return (
    <StyleCartContainer>
      <Container>
        {data.books.map((el) => (
          <CartElement
            date={el.date}
            book={el.bookId}
            key={el._id}
            status={el.status}
          />
        ))}
      </Container>
    </StyleCartContainer>
  );
};

export default CartContainer;
