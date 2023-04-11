import React, { useEffect } from "react";
import StyleSignIn from "./style";
import Container from "../../components/UI/Container";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Sign In";
  }, []);

  return (
    <StyleSignIn>
      <Container>
        <SignInForm />
      </Container>
    </StyleSignIn>
  );
};

export default SignIn;
