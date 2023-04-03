import styled from "styled-components";

const StyleBookInfoContainer = styled.div`
  &.vertical {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &.horizontal {
    display: grid;
    gap: 3rem;
  }

  & > img {
    width: 100%;
    border-radius: 1.5rem;
  }
`;

export default StyleBookInfoContainer;
