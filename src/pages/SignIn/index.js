import React from "react";
import StyleSignIn from "./style";
import Container from "../../components/UI/Container";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  return (
    <StyleSignIn>
      <Container>
        <h2>Sign In</h2>
        <SignInForm />
      </Container>
    </StyleSignIn>
  );
};

export default SignIn;
