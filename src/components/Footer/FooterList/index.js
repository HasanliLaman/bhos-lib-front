import React from "react";
import { Link } from "react-router-dom";
import StyleFooterList from "./style";

const FooterList = ({ header, items }) => {
  return (
    <StyleFooterList>
      <header>{header}</header>
      <ul>
        {items.map((el) => (
          <li key={el}>
            <Link to={el}>{el}</Link>
          </li>
        ))}
      </ul>
    </StyleFooterList>
  );
};

export default FooterList;
