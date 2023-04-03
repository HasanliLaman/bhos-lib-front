import styled from "styled-components";

const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  & > div {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 5rem;

    & > div {
      display: block;
      flex-grow: 1;
      border-top: 1px solid var(--color-border);
    }
  }
`;

export default StyleHeader;
