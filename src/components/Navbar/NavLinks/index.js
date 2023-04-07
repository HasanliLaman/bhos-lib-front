import React from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "../../../assets/images/icon-close.svg";
import StyleNavLinks from "./style";

const NavLinks = ({ navActive, setNavActive }) => {
  return (
    <StyleNavLinks className={navActive ? "nav-active" : ""}>
      <img onClick={() => setNavActive(false)} alt="close" src={closeIcon} />
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/books"
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/categories"
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/uploads"
          >
            Uploads
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "")}
            to="/faq"
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </StyleNavLinks>
  );
};

export default NavLinks;
