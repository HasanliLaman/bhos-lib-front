import React, { useEffect } from "react";
import Banner from "../../components/UI/Banner";
import CartContainer from "../../components/Cart/CartContainer";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Cart";
  }, []);

  return (
    <div>
      <Banner current="Cart" />
      <CartContainer />
    </div>
  );
};

export default Cart;
