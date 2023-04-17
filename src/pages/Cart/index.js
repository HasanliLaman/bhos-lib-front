import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/UI/Banner";
import { getMyCart } from "../../server";
import CartContainer from "../../components/Cart/CartContainer";
import Loading from "../../components/UI/Loading";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Cart";
  }, []);

  const { data } = useQuery(["cart"], getMyCart);

  return (
    <div>
      <Banner current="Cart" />
      {!data && <Loading style={{ padding: "5rem 0" }} />}
      {data && <CartContainer data={data.data.data.doc} />}
    </div>
  );
};

export default Cart;
