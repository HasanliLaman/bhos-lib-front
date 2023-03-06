import styled from "styled-components";

const StyleTestimonial = styled.article`
  padding: 3rem;
  border: 1px solid var(--color-border);
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: var(--color-accent);

  img {
    width: 70px;
    height: 70px;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    padding: 3rem 0;
  }

  .author {
    font-size: 1.2rem;
    line-height: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
      position: absolute;
      height: 170px;
      filter: brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(375%)
        hue-rotate(327deg) brightness(116%) contrast(87%);
      top: -60px;
      z-index: -1;
      left: 50%;
      transform: translateX(-40%);
    }

    span:last-of-type {
      font-weight: 300;
      color: var(--color-text);
    }
  }
`;

export default StyleTestimonial;
