import React from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../../../assets/images/icon-user.svg";
import favoriteIcon from "../../../assets/images/icon-favorite.svg";
import cartIcon from "../../../assets/images/icon-cart.svg";
import StyleUserDetails from "./style";

const UserDetails = () => {
  return (
    <StyleUserDetails>
      <li>
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? "icon-active" : "")}
        >
          <img alt="user" src={userIcon} />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "icon-active" : "")}
        >
          <img alt="favorite" src={favoriteIcon} />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "icon-active" : "")}
        >
          <img alt="cart" src={cartIcon} />
        </NavLink>
      </li>
    </StyleUserDetails>
  );
};

export default UserDetails;
