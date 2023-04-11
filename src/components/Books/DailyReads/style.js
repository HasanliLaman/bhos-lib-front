import styled from "styled-components";

const StyleDailyReads = styled.section`
  padding: 6rem 0 3rem;

  .swiper-slide {
    height: auto;

    & > div {
      grid-template-rows: 1fr auto;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-accent);
    background: var(--color-white);
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &::after {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    padding: 8rem 0 5rem;
  }
`;

export default StyleDailyReads;
