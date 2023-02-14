import React from "react";
import UserDetails from "../UserDetails";
import Container from "../../UI/Container";
import StyleNavMain from "./style";
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg";
import logo from "../../../assets/images/logo.svg";
import SearchContainer from "../NavSearch/SearchContainer";

const NavMain = ({ setNavActive }) => {
  return (
    <StyleNavMain>
      <Container>
        <img
          onClick={() => setNavActive(true)}
          alt="menu"
          src={hamburgerIcon}
        />
        <a className="logo" href="/">
          <img alt="logo" src={logo} />
        </a>
        <SearchContainer />
        <UserDetails />
      </Container>
    </StyleNavMain>
  );
};

export default NavMain;
