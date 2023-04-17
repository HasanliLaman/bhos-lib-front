import styled from "styled-components";

const StyleFileUpload = styled.div`
  background: var(--color-white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  border: 5px dashed var(--color-border);
  cursor: pointer;

  img {
    width: 150px;
    filter: brightness(0) saturate(100%) invert(67%) sepia(9%) saturate(12%)
      hue-rotate(317deg) brightness(89%) contrast(89%);
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  button {
    height: 40px;
  }
`;

export default StyleFileUpload;
