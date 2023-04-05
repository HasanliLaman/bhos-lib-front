import React from "react";
import StyleStockStatusBadge from "./style";

const StockStatusBadge = ({ stocked }) => {
  return (
    <StyleStockStatusBadge stocked={stocked}>
      {stocked ? "In stock" : "Out of Stock"}
    </StyleStockStatusBadge>
  );
};

export default StockStatusBadge;
