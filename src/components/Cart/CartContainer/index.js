import React from "react";
import CartElement from "../CartElement";
import StyleCartContainer from "./style";
import Container from "../../UI/Container";

const CartContainer = () => {
  return (
    <StyleCartContainer>
      <Container>
        <CartElement status="in-use" />
        <CartElement status="returned" />
        <CartElement status="in-use" />
        <CartElement status="requested" />
        <CartElement status="in-use" />
        <CartElement status="in-use" />
        <CartElement status="requested" />
        <CartElement status="returned" />
        <CartElement status="in-use" />
      </Container>
    </StyleCartContainer>
  );
};

export default CartContainer;
