import { css } from "styled-components";

const Typography = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Sora", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-text);
    line-height: 2.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: var(--color-accent);
  }

  h2 {
    font-size: 3rem;
    line-height: 3.6rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3.6rem;
      line-height: 4.4rem;
    }
  }
`;

export default Typography;
