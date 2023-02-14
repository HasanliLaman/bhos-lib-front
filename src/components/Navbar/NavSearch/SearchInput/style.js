import styled from "styled-components";

const StyleSearchInput = styled.div`
  border-radius: 50px;
  background: #f6f6f6;
  display: flex;

  label {
    display: flex;
  }

  img {
    height: 30px;
    padding-right: 1.982rem;
    cursor: pointer;
    align-self: center;
  }

  input {
    outline: 0;
    border: 0;
    font-size: 1.4rem;
    line-height: 1.4rem;
    background: transparent;
    flex-grow: 1;
    font-family: inherit;
    padding: 1.5rem 1.982rem;

    &::placeholder {
      color: var(--color-text);
    }
  }
`;

export default StyleSearchInput;
