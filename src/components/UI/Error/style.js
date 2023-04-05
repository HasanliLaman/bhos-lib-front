import styled from "styled-components";

const StyleError = styled.section`
  padding: 7rem 0 11rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      color: var(--color-primary);
      font-size: 12rem;
      line-height: 13.5rem;
    }

    h3 {
      font-size: 3.6rem;
      margin-bottom: 2rem;
      text-transform: capitalize;
      letter-spacing: -2px;
      line-height: 4.43rem;
    }

    & > p {
      font-size: 1.8rem;
      line-height: 3rem;
      margin-bottom: 2rem;
      max-width: 600px;
    }
  }
`;

export default StyleError;
