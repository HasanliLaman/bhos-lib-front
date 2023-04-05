import styled from "styled-components";

const StyleStockStatusBadge = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 2rem;
  padding: 0 0.9rem;
  border-radius: 0.3rem;
  color: ${(props) => (props.stocked ? "#82d175" : "#ff5a5c")};
  background: ${(props) =>
    props.stocked ? "rgba(130,209,117,.2)" : "#fff2f0"};
  display: inline-block;
  margin-bottom: 2rem;
`;

export default StyleStockStatusBadge;
