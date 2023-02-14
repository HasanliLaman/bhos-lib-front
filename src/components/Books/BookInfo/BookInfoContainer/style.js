import styled from "styled-components";

const StyleBookInfoContainer = styled.div`
  padding: 2rem;
  &.horizontal {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &.vertical {
    display: grid;
    gap: 3rem;
  }

  & > img {
    width: 100%;
    border-radius: 1.5rem;
  }
`;

export default StyleBookInfoContainer;
