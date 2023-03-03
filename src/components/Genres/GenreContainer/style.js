import styled from "styled-components";

const StyleGenreContainer = styled.div`
  padding: 8rem 0;

  & > div {
    display: grid;
    row-gap: 2.7rem;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 3rem;
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 0 12rem;
  }
`;

export default StyleGenreContainer;
