import React from "react";
import { createPortal } from "react-dom";
import StyleOverlay from "./style";

const Overlay = (props) => {
  return createPortal(
    <StyleOverlay
      className={props.isHidden ? "hidden-for-desktop" : ""}
      {...props}
    ></StyleOverlay>,
    document.querySelector("#modal")
  );
};

export default Overlay;
