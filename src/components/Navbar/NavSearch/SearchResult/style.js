import styled from "styled-components";

const StyleSearchResult = styled.div`
  background: var(--color-white);
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
  font-weight: 600;
  left: 0;
  max-height: 350px;
  overflow-y: auto;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 110%;
  z-index: 1;

  p {
    line-height: 17.22px;
    color: var(--color-accent);
  }

  ul {
    display: flex;
    flex-direction: column;

    li a {
      display: grid;
      padding: 1rem 0;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      row-gap: 0.5rem;
      column-gap: 1.5rem;
    }

    li:not(li:last-of-type) {
      border-bottom: 1px solid var(--color-border);
    }

    span {
      color: var(--color-primary);
      line-height: 2.4rem;
    }

    p {
      align-self: end;
    }

    img {
      width: 60px;
      height: 84px;
      object-fit: cover;
      border-radius: 10px;
      grid-row: 1/3;
    }
  }
`;

export default StyleSearchResult;
