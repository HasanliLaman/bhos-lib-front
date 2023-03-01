import React from "react";
import StyleFooterCopyright from "./style";
import Container from "../../UI/Container";

const FooterCopyright = () => {
  return (
    <StyleFooterCopyright>
      <Container>
        Copyright © 2023
        <a href=""> Bookory</a>. All rights reserved.
      </Container>
    </StyleFooterCopyright>
  );
};

export default FooterCopyright;
