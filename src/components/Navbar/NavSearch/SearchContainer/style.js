import styled from "styled-components";

const StyleSearchContainer = styled.div`
  position: relative;
  display: none;
  flex-grow: 1;
  max-width: 700px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export default StyleSearchContainer;
