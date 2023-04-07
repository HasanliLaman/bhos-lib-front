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
        <FooterList header="Explore" items={["About", "Faq", "Sign in"]} />
        <FooterList
          header="Our Service"
          items={["Books", "Uploads", "Favorites", "Contact"]}
        />
        <FooterList
          header="Categories"
          items={["Fiction", "Science", "Engineering", "Business"]}
        />
      </Container>
    </StyleFooterMain>
  );
};

export default FooterMain;
