import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import StyleFooterCopyright from "./style";

const FooterCopyright = () => {
  return (
    <StyleFooterCopyright>
      <Container>
        Copyright © 2023
        <Link to="/"> Bookory</Link>. All rights reserved.
      </Container>
    </StyleFooterCopyright>
  );
};

export default FooterCopyright;
