import styled from "styled-components";

const StyleButton = styled.button`
  cursor: pointer;
  align-items: center;
  border-radius: 50px;
  border: 0;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  height: 52px;
  justify-content: center;
  outline: 0;
  overflow: hidden;
  padding: 1.7rem 3.1rem;
  text-transform: capitalize;
  transition: all 0.3s;
  background: ${(props) =>
    props.type === "primary" ? "var(--color-primary)" : "var(--color-white)"};
  color: ${(props) =>
    props.type === "primary" ? "var(--color-white)" : "var(--color-accent)"};

  &:hover {
    background: ${(props) =>
      props.type === "primary" ? "var(--color-primary-hover)" : "#eee"};
  }

  img {
    height: 25px;
    filter: ${(props) =>
      props.type === "primary"
        ? " brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(2%) hue-rotate(331deg) brightness(109%) contrast(101%)"
        : "brightness(0) saturate(100%) invert(61%) sepia(100%) saturate(4064%) hue-rotate(332deg) brightness(102%) contrast(93%)"};
  }
`;

export default StyleButton;
