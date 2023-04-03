import styled from "styled-components";

const StyleHeroContainer = styled.section`
  background: #fcedec;
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  .props-left,
  .props-right,
  .props-bottom {
    position: absolute;
    background: var(--color-primary);
    opacity: 0.7;
    border-radius: 50%;
  }

  .props-left {
    width: 150px;
    height: 150px;
    top: -65px;
    left: -70px;
  }

  .props-bottom {
    width: 450px;
    height: 300px;
    bottom: -240px;
    right: 100px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }

  @media (min-width: 768px) {
    padding: 5rem 0;

    .props-right {
      width: 80px;
      height: 80px;
      right: 200px;
      top: -20px;
    }
  }
`;

export default StyleHeroContainer;
