import styled from "styled-components";

const GenreSlider = styled.div`
  padding-bottom: 5rem;

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
    padding-bottom: 7rem;
  }
`;

export default GenreSlider;
