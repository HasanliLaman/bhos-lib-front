import styled from "styled-components";

const StyleNavLinks = styled.section`
  position: fixed;
  padding-top: 6rem;
  max-width: 330px;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  right: 0;
  background-color: var(--color-white);
  transform: translateX(-100%);
  transition: all 0.3s;

  &.nav-active {
    transform: translateX(0);
  }

  & > img {
    width: 25px;
    position: absolute;
    cursor: pointer;
    filter: brightness(0) saturate(100%);
    top: 23px;
    right: 20px;

    &:hover {
      filter: brightness(0) saturate(100%) invert(44%) sepia(54%)
        saturate(2589%) hue-rotate(333deg) brightness(106%) contrast(93%);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
  }

  a {
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-accent);
    padding: 1.3rem 0;
    display: inline-block;
    width: 100%;

    &:hover {
      color: var(--color-primary);
    }
  }

  ul li:last-of-type a {
    border-bottom: 0;
  }

  .link-active a {
    color: var(--color-primary-hover);
  }

  @media (min-width: 768px) {
    position: static;
    max-width: none;
    padding: 0;
    border-top: 1px solid var(--color-border);
    transform: translateX(0);

    ul {
      display: flex;
      flex-direction: row;
      padding: 0;
      justify-content: center;
    }

    a {
      border-bottom: 0;
      padding: 2.24rem 2.8rem;

      &:hover {
        color: var(--color-primary);
      }
    }

    & > img {
      display: none;
    }
  }
`;

export default StyleNavLinks;
