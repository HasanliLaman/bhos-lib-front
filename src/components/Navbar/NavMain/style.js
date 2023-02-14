import styled from "styled-components";

const StyleNavMain = styled.section`
  padding: 3.15rem 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;

      /* img {
      transform: translateX(20%);
    } */
    }

    & > img {
      height: 30px;
      cursor: pointer;
      filter: brightness(0) saturate(100%);

      &:hover {
        filter: brightness(0) saturate(100%) invert(44%) sepia(54%)
          saturate(2589%) hue-rotate(333deg) brightness(106%) contrast(93%);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 3.3rem 0;

    & > div {
      justify-content: space-between;
      gap: 3rem;

      & > img {
        display: none;
      }

      .logo {
        flex-grow: 0;
      }
    }
  }
`;

export default StyleNavMain;
