import React from "react";
import Banner from "../../components/UI/Banner";
import CartContainer from "../../components/Cart/CartContainer";

const Cart = () => {
  return (
    <div>
      <Banner current="Cart" />
      <CartContainer />
    </div>
  );
};

export default Cart;
