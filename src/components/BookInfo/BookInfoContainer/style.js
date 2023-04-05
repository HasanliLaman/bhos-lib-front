import styled from "styled-components";

const StyleBookInfoContainer = styled.section`
  padding-top: 8rem;
  padding-bottom: 10rem;

  & > div {
    display: grid;
    gap: 3rem;
    align-items: start;
  }

  @media (min-width: 768px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyleBookInfoContainer;
