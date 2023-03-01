import React from "react";
import StyleFooterList from "./style";

const FooterList = ({ header, items }) => {
  return (
    <StyleFooterList>
      <header>{header}</header>
      <ul>
        {items.map((el) => (
          <li key={el}>
            <a href="">{el}</a>
          </li>
        ))}
      </ul>
    </StyleFooterList>
  );
};

export default FooterList;
