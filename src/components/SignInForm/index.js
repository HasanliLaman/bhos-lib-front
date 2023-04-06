import React from "react";
import Button from "../UI/Button";
import StyleSignInForm from "./style";

const SignInForm = () => {
  return (
    <StyleSignInForm>
      <div className="form-group">
        <label for="email">Email</label>
        <input id="email" placeholder="Enter email" name="email" />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input id="password" placeholder="Enter password" name="password" />
      </div>
      <Button text="Sign in" type="primary" />
    </StyleSignInForm>
  );
};

export default SignInForm;
