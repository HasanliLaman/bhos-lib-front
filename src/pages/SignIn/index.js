import React from "react";
import StyleSignIn from "./style";
import Container from "../../components/UI/Container";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  return (
    <StyleSignIn>
      <Container>
        <SignInForm />
      </Container>
    </StyleSignIn>
  );
};

export default SignIn;
