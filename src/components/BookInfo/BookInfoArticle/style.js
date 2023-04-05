import styled from "styled-components";

const StyleBookInfoArticle = styled.article`
  padding: 3rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-border);

  h2 {
    font-size: 3.6rem;
    line-height: 4.4rem;
    font-size: 600;
    margin-bottom: 1rem;
  }

  .book-details {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-border);

    & > div {
      display: flex;
      align-items: center;
      gap: 4rem;

      & > p {
        font-size: 1.2rem;
      }
    }
  }

  .book-description {
    padding: 2.3rem 0 2rem;
    border-bottom: 1px solid var(--color-border);

    h3 {
      font-size: 2rem;
      line-height: 2.8rem;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }
  }

  .buttons {
    padding: 2.6rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .book-categories {
    display: flex;
    gap: 0.5rem;
    font-weight: 400;
    padding-top: 2.5rem;
    font-size: 1.3rem;

    p {
      color: var(--color-lighter);
    }

    a {
      color: var(--color-accent);
    }

    a:hover {
      color: var(--color-primary);
    }
  }
`;

export default StyleBookInfoArticle;
