import styled from "styled-components";

const StyleBestBooksContainer = styled.section`
  padding: 6rem 0;

  & > div {
    display: grid;
    row-gap: 6rem;
  }

  @media (min-width: 768px) {
    & > div {
      grid-template-columns: 2fr 1fr;
      column-gap: 3rem;
    }
  }
`;

export default StyleBestBooksContainer;
