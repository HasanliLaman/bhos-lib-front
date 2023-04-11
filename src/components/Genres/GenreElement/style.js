import styled from "styled-components";

const StyleGenreElement = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 3rem;
  display: flex;
  align-items: flex-end;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.8rem;
  color: var(--color-accent);
  width: 100%;
  height: 230px;
  cursor: pointer;

  p {
    z-index: 1;
    background: var(--color-white);
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }

  img:hover {
    width: 110%;
    height: 110%;
  }

  @media (min-width: 768px) {
    height: 195px;
  }
`;

export default StyleGenreElement;
