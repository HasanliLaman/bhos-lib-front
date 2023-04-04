import styled from "styled-components";

const StyleBanner = styled.section`
  background: #f0f0f0;
  padding: 5.4rem 0;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 500;
      color: var(--color-lighter);

      img {
        width: 24px;
        filter: brightness(0) saturate(100%) invert(60%) sepia(5%) saturate(4%)
          hue-rotate(314deg) brightness(100%) contrast(92%);
      }

      p {
        color: var(--color-primary);
      }
    }
  }

  h1 {
    font-size: 6.4rem;
    line-height: 7.2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    & > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default StyleBanner;
