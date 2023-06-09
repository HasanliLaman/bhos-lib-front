import React from "react";

const RatingStar = ({ active = false }) => {
  return (
    <li>
      <svg viewBox="0 0 29 29" width="13px" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.746 1.06799L18.9837 10.0955L28.4603 11.552L21.6032 18.575L23.2215 28.4966L14.746 23.8098L6.2706 28.4966L7.88888 18.575L1.03174 11.552L10.5083 10.0955L14.746 1.06799Z"
          fill={active ? "#fa8c17" : "transparent"}
          stroke={active ? "#fa8c17" : "#444"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  );
};

export default RatingStar;
