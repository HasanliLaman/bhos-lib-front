import styled from "styled-components";

const GenreSlider = styled.div`
  padding-bottom: 5rem;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-accent);
  }

  @media (min-width: 768px) {
    padding-bottom: 7rem;
  }
`;

export default GenreSlider;
