import styled from "styled-components";

const StyleBooks = styled.section`
  & > div {
    padding-top: 8rem;
    padding-bottom: 9rem;
    display: grid;
    row-gap: 5rem;
  }

  @media (min-width: 768px) {
    & > div {
      padding-bottom: 11rem;
      grid-template-columns: 1fr 3fr;
      column-gap: 3rem;
      align-items: start;
    }
  }
`;

export default StyleBooks;
