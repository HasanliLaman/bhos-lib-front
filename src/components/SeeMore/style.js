import styled from "styled-components";
import bgImg from "../../assets/images/bg-see-more.jpg";

const StyleSeeMore = styled.section`
  background-color: #ff795c;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 321px auto;
  padding: 6rem 0 12rem;

  & > div > p {
    text-transform: uppercase;
    color: var(--color-white);
  }

  & > div > p:first-of-type {
    font-size: 1.2rem;
    line-height: 2.06rem;
    font-weight: 400;
  }

  & > div > p:last-of-type {
    font-size: 3rem;
    line-height: 3.8rem;
    font-weight: 600;
    max-width: 300px;
    margin: 1.5rem 0 3rem;
  }

  @media (min-width: 768px) {
    background-size: 520px auto;
  }

  @media (min-width: 880px) {
    background-size: 600px auto;
  }

  @media (min-width: 1024px) {
    background-position: 70% 100%;
    background-size: 780px auto;
  }

  @media (min-width: 1200px) {
    background-size: 885px auto;
  }
`;

export default StyleSeeMore;
