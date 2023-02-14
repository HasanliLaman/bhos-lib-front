import React from "react";
import { useState } from "react";
import NavLinks from "../NavLinks";
import NavMain from "../NavMain";
import Overlay from "../../UI/Overlay";

const NavContainer = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav>
      <NavMain setNavActive={setNavActive} />
      <NavLinks navActive={navActive} setNavActive={setNavActive} />
      {navActive && <Overlay isHidden={true} />}
    </nav>
  );
};

export default NavContainer;
