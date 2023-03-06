import React from "react";
import StyleTestimonial from "./style";
import quote from "../../../assets/images/icon-quote.svg";

const Testimonial = ({ text, name, major, avatar }) => {
  return (
    <StyleTestimonial>
      <img alt="avatar" src={avatar} />
      <p>{text}</p>
      <div className="author">
        <img alt="quote" src={quote} />
        <span>{name}</span>
        <span> / {major}</span>
      </div>
    </StyleTestimonial>
  );
};

export default Testimonial;
