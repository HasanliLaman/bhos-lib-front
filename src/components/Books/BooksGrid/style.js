import styled from "styled-components";

const StyleBookGrid = styled.div`
  display: grid;
  row-gap: 3rem;
  column-gap: 2rem;

  & > div > a {
    height: 85%;
  }

  @media (min-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default StyleBookGrid;
