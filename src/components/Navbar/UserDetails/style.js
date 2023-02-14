import styled from "styled-components";

const StyleUserDetails = styled.ul`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  a {
    display: flex;
  }

  img {
    height: 29px;
    filter: brightness(0) saturate(100%);

    &:hover {
      filter: brightness(0) saturate(100%) invert(44%) sepia(54%)
        saturate(2589%) hue-rotate(333deg) brightness(106%) contrast(93%);
    }
  }

  @media (min-width: 768px) {
    gap: 1.5rem;

    img {
      height: 26px;
    }
  }
`;

export default StyleUserDetails;
