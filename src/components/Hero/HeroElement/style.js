import styled from "styled-components";

const StyleHeroElement = styled.div`
  display: grid;
  align-items: center;
  width: 70%;
  row-gap: 3rem;

  article {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > img {
    width: 100%;
  }

  article > p {
    color: var(--color-lighter);
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  h1 {
    text-transform: capitalize;
    font-size: 3.1rem;
    line-height: 3.7rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;

    h1 {
      font-size: 4.5rem;
      line-height: 5rem;
    }

    article {
      max-width: 470px;
    }
  }
`;

export default StyleHeroElement;
