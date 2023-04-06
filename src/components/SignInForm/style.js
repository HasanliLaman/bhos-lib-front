import styled from "styled-components";

const StyleSignInForm = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;

  .form-group {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 0.3rem;

    label {
      line-height: 2.8rem;
    }

    input {
      font-family: inherit;
      outline: 0;
      border: 1px solid var(--color-border);
      border-radius: 50px;
      padding: 1.3rem 2.1rem;
    }
  }

  button {
    margin-top: 1rem;
  }
`;

export default StyleSignInForm;
