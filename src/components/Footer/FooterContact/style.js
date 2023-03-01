import styled from "styled-components";

const StyleFooterContact = styled.div`
  header {
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
  }

  p:first-of-type {
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 3.2rem;
    letter-spacing: -1px;
    color: var(--color-primary);
    margin: 2rem 0;
  }

  p:last-of-type {
    color: var(--color-white);
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-top: 2rem;
  }

  .date {
    color: var(--color-lighter);
  }

  @media (min-width: 768px) {
    padding-left: 4rem;
  }
`;

export default StyleFooterContact;
