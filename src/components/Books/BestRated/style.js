import styled from "styled-components";

const StyleBestRated = styled.div`
  & > ul {
    display: grid;

    & > li {
      border-bottom: 1px solid var(--color-border);
    }

    & > li {
      padding: 3rem 0;
    }

    & > li:first-of-type {
      padding: 0 0 3rem;
    }

    & > li:last-of-type {
      padding: 3rem 0 0;
      border-bottom: 0;
    }
  }

  .horizontal {
    grid-template-columns: 1fr 4fr;
    align-items: center;
  }

  @media (min-width: 768px) {
    & > ul {
      grid-template-columns: 1fr 1fr;

      & > li {
        padding: 3rem 0;
      }

      & > li:first-of-type,
      & > li:nth-of-type(2) {
        padding: 0 0 3rem;
      }

      & > li:last-of-type,
      & > li:nth-of-type(5) {
        padding: 3rem 0 0;
        border-bottom: 0;
      }

      & > li:nth-child(odd) {
        padding-right: 3rem;
        border-right: 1px solid var(--color-border);
      }

      & > li:nth-child(even) {
        padding-left: 3rem;
      }
    }

    .horizontal {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyleBestRated;
