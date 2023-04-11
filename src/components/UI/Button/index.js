import React from "react";
import StyleButton from "./style";

const Button = ({ text, onClick, type, className }) => {
  return (
    <StyleButton className={className || ""} onClick={onClick} type={type}>
      {text}
    </StyleButton>
  );
};

export default Button;
