import React from "react";
import Button from "../Button";
import StyleHeader from "./style";
import chevron from "../../../assets/images/icon-chevron-right.svg";

const Header = ({ title }) => {
  return (
    <StyleHeader>
      <h2>{title}</h2>
      <div></div>
      <Button
        type="primary"
        text={
          <>
            <p>View All</p>
            <img alt="see more" src={chevron} />
          </>
        }
      />
    </StyleHeader>
  );
};

export default Header;
