import React from "react";
import Testimonial from "../Testimonial";
import StyleTestimonialContainer from "./style";
import avatar1 from "../../../assets/images/testimonial-1.png";
import avatar2 from "../../../assets/images/testimonial-2.png";
import avatar3 from "../../../assets/images/testimonial-3.png";
import Container from "../../UI/Container";

const TestimonialContainer = () => {
  return (
    <StyleTestimonialContainer>
      <Container>
        <h2>What Students Says</h2>
        <div className="testimonial-container">
          <Testimonial
            name="Parvana Gulieva"
            major="PAE"
            avatar={avatar1}
            text='"Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after to books arrived to ask about the author."'
          />
          <Testimonial
            name="Nubar Hasanova"
            major="CE"
            avatar={avatar2}
            text='"I am so happy to find a site where I can shop for unusual items. The packaging was phenomenal and my book arrived on time in perfect condition."'
          />
          <Testimonial
            name="Lala Ismayilzada"
            major="PE"
            avatar={avatar3}
            text='"I would also like to say thank you to all your staff. Wow what great service, I love it! Thanks for the great service. I sent an email after to books arrived to ask about the author."'
          />
        </div>
      </Container>
    </StyleTestimonialContainer>
  );
};

export default TestimonialContainer;
