import styled from "styled-components";

const StyleFooterCopyright = styled.section`
  padding: 3rem 0;
  border-top: 1px solid rgba(153, 153, 153, 0.3);
  font-weight: 400;
  color: var(--color-white);

  a {
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-hover);
    }
  }
`;

export default StyleFooterCopyright;
