import React from "react";
import StyleError from "./style";
import Button from "../Button";
import Container from "../Container";
import chevron from "../../../assets/images/icon-chevron-right.svg";

const Error = () => {
  return (
    <StyleError>
      <Container>
        <h2>404</h2>
        <h3>OOPS! THAT PAGE CAN'T BE FOUND.</h3>
        <p>
          It looks like nothing was found at this location. You can either go
          back to the last page or go to homepage.
        </p>
        <Button
          type="primary"
          text={
            <>
              <p>Homepage</p>
              <img alt="homepage" src={chevron} />
            </>
          }
        />
      </Container>
    </StyleError>
  );
};

export default Error;
