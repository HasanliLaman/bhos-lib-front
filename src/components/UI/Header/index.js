import React from "react";
import Button from "../Button";
import StyleHeader from "./style";
import chevron from "../../../assets/images/icon-chevron-right.svg";
import { Link } from "react-router-dom";

const Header = ({ title, to }) => {
  return (
    <StyleHeader>
      <h2>{title}</h2>
      <div></div>
      <Link to={to}>
        <Button
          type="primary"
          text={
            <>
              <p>View All</p>
              <img alt="see more" src={chevron} />
            </>
          }
        />
      </Link>
    </StyleHeader>
  );
};

export default Header;
