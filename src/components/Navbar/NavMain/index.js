import React from "react";
import UserDetails from "../UserDetails";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg";
import logo from "../../../assets/images/logo.svg";
import SearchContainer from "../NavSearch/SearchContainer";
import StyleNavMain from "./style";

const NavMain = ({ setNavActive }) => {
  return (
    <StyleNavMain>
      <Container>
        <img
          onClick={() => setNavActive(true)}
          alt="menu"
          src={hamburgerIcon}
        />
        <Link className="logo" to="/">
          <img alt="logo" src={logo} />
        </Link>
        <SearchContainer />
        <UserDetails />
      </Container>
    </StyleNavMain>
  );
};

export default NavMain;
