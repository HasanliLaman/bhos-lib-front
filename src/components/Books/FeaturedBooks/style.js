import styled from "styled-components";

const StyleFeaturedBooks = styled.section`
  padding: 6rem 0 9rem;
  background: #fff8f2;

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

  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }
`;

export default StyleFeaturedBooks;
