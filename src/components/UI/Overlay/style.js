import styled from "styled-components";

const StyleOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;

  &.hidden-for-desktop {
    display: block;
  }

  @media (min-width: 768px) {
    &.hidden-for-desktop {
      display: none;
    }
  }
`;

export default StyleOverlay;
