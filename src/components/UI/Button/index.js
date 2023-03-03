import React from "react";
import StyleButton from "./style";

const Button = ({ text, onClick, type }) => {
  return (
    <StyleButton onClick={onClick} type={type}>
      {text}
    </StyleButton>
  );
};

export default Button;
