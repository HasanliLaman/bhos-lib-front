import styled from "styled-components";

const StyleUploadElement = styled.a`
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;

  p:first-of-type {
    font-weight: 500;
  }

  img {
    width: 100px;
    align-self: center;
    margin-bottom: 1.5rem;
  }
`;

export default StyleUploadElement;
