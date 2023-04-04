import styled from "styled-components";

const StyleFooterMain = styled.section`
  & > div {
    display: grid;
    row-gap: 4rem;
    padding-top: 6rem;
    padding-bottom: 5rem;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;

export default StyleFooterMain;
