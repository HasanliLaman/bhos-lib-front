import React from "react";
import Container from "../../UI/Container";
import FooterCompany from "../FooterCompany";
import FooterContact from "../FooterContact";
import FooterList from "../FooterList";
import StyleFooterMain from "./style";

const FooterMain = () => {
  return (
    <StyleFooterMain>
      <Container>
        <FooterCompany />
        <FooterContact />
        <FooterList
          header="Explore"
          items={["About us", "Sitemap", "Bookmarks", "Sign in"]}
        />
        <FooterList
          header="Our Service"
          items={["About us", "Sitemap", "Bookmarks", "Sign in"]}
        />
        <FooterList
          header="Categories"
          items={["About us", "Sitemap", "Bookmarks", "Sign in"]}
        />
      </Container>
    </StyleFooterMain>
  );
};

export default FooterMain;
