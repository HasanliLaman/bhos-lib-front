import styled from "styled-components";

const StyleTestimonialContainer = styled.section`
  padding: 3rem 0 6rem;

  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .testimonial-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 0 8rem;

    .testimonial-container {
      gap: 3rem;
      flex-direction: row;
    }

    h2 {
      text-align: left;
      margin-bottom: 4rem;
    }
  }
`;

export default StyleTestimonialContainer;
