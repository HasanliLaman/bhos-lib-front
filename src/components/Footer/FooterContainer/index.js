import React from "react";
import FooterCopyright from "../FooterCopyright";
import FooterMain from "../FooterMain";
import StyleFooterContainer from "./style";

const FooterContainer = () => {
  return (
    <StyleFooterContainer>
      <FooterMain />
      <FooterCopyright />
    </StyleFooterContainer>
  );
};

export default FooterContainer;
