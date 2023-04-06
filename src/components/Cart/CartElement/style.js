import styled from "styled-components";

const StyleCartElement = styled.div`
  padding: 2rem;
  border: 0.1rem solid var(--color-border);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 1rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.8rem;
  }

  span {
    font-size: 1.6rem;
  }

  button {
    height: 45px;
    border: 1px solid var(--color-primary);
  }

  img {
    width: 100%;
    border-radius: 7px;
  }

  .status {
    font-weight: 400;
    border-radius: 0.4rem;
    border-width: 0.1rem;
    border-style: solid;
    padding: 0 0.7rem;
    margin: 0.7rem 0 1.3rem;
  }

  .requested {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
  }

  .in-use {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }

  .returned {
    color: #1677ff;
    background: #e6f4ff;
    border-color: #91caff;
  }

  @media (min-width: 850px) {
    grid-template-columns: 70px 1fr;
    gap: 2rem;

    article {
      flex-direction: row;
      justify-content: space-around;
    }

    .status {
      margin: 0;
    }
  }
`;

export default StyleCartElement;
