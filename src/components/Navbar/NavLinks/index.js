import React from "react";
import StyleNavLinks from "./style";
import closeIcon from "../../../assets/images/icon-close.svg";

const NavLinks = ({ navActive, setNavActive }) => {
  return (
    <StyleNavLinks className={navActive ? "nav-active" : ""}>
      <img onClick={() => setNavActive(false)} alt="close" src={closeIcon} />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </StyleNavLinks>
  );
};

export default NavLinks;
