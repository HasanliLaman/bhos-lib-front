import styled from "styled-components";

const StyleBookInfoContainer = styled.div`
  height: 100%;

  & > a {
    height: 100%;
  }

  &.vertical {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &.horizontal {
    display: grid;
    gap: 3rem;
  }

  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
`;

export default StyleBookInfoContainer;
