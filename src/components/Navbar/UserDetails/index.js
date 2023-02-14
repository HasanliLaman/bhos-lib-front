import React from "react";
import StyleUserDetails from "./style";
import userIcon from "../../../assets/images/icon-user.svg";
import favoriteIcon from "../../../assets/images/icon-favorite.svg";
import cartIcon from "../../../assets/images/icon-cart.svg";

const UserDetails = () => {
  return (
    <StyleUserDetails>
      <li>
        <a href="">
          <img alt="user" src={userIcon} />
        </a>
      </li>
      <li>
        <a href="">
          <img alt="favorite" src={favoriteIcon} />
        </a>
      </li>
      <li>
        <a href="">
          <img alt="cart" src={cartIcon} />
        </a>
      </li>
    </StyleUserDetails>
  );
};

export default UserDetails;
