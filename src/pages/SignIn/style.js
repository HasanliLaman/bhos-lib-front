import styled from "styled-components";
import bg from "../../assets/images/signin-background.svg";

const StyleSignIn = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  & > div {
    width: 100%;
  }

  h2 {
    text-align: center;
  }
`;

export default StyleSignIn;
