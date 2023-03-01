import styled from "styled-components";

const StyleFooterList = styled.div`
  header {
    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  a {
    color: var(--color-lighter);

    &:hover {
      color: var(--color-primary-hover);
    }
  }
`;

export default StyleFooterList;
