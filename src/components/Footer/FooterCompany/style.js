import styled from "styled-components";

const StyleFooterCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ul {
    display: flex;
  }

  p {
    color: var(--color-lighter);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.3rem;
  }

  & > div {
    margin: 3.5rem 0 3rem;
  }

  ul img {
    height: 17.33px;
    filter: brightness(0) saturate(100%) invert(63%) sepia(12%) saturate(18%)
      hue-rotate(318deg) brightness(95%) contrast(88%);
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    border-right: 1px solid rgba(153, 153, 153, 0.3);
  }
`;

export default StyleFooterCompany;
