import styled from "styled-components";

const StyleMostViewed = styled.div`
  .horizontal {
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 1.5rem 0;
  }

  & > ul {
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    margin-top: 3rem;
    background: #f4fbf2;

    & > li:not(:last-of-type) {
      border-bottom: 1px solid var(--color-border);
    }
  }

  @media (min-width: 768px) {
    & > ul {
      margin-top: 4rem;
    }

    .horizontal {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyleMostViewed;
