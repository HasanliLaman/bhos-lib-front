import styled from "styled-components";

const StyleUploadContainer = styled.section`
  padding: 10rem 0;

  & > div {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 400px) {
    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 550px) {
    & > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) {
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1020px) {
    & > div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export default StyleUploadContainer;
