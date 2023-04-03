import styled from "styled-components";

const StyleBookInfoArticle = styled.article`
  overflow: hidden;

  & > a {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: var(--color-accent);
    margin-bottom: 0.8rem;
    display: inline-block;
    width: 100%;
    overflow-x: hidden;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: var(--color-primary);
    }
  }

  span {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 400;
    color: var(--color-lighter);
    display: inline-block;
    margin-top: 0.8rem;
  }
`;

export default StyleBookInfoArticle;
