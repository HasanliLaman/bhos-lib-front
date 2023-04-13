import styled from "styled-components";

const StyleUserDetails = styled.div`
  display: grid;
  row-gap: 2rem;
  align-items: start;

  & > div {
    background: var(--color-white);
    border-radius: 5px;
  }

  .photo {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    color: var(--color-accent);

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .details {
    display: grid;
    gap: 1.5rem;
    padding: 4rem 3rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    span {
      color: var(--color-accent);
      font-weight: 400;
    }

    p {
      padding: 0.5rem 1rem;
      border-radius: 3px;
      background: #f6f6f6;
    }

    button {
      margin-top: 1rem;
      height: 43px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    column-gap: 2rem;

    .details {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1020px) {
    .photo {
      padding: 3rem 4rem;
    }

    .details {
      gap: 1.5rem 3rem;
      padding: 5rem 4rem;

      button {
        justify-self: start;
        width: 200px;
        margin-top: 2rem;
      }
    }
  }
`;

export default StyleUserDetails;
