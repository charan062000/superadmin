import React from "react";

const CollegeIcon = ({ color = "black", strokeWidth = 1.6, ...props }) => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 7.31217L11 1.64551L1 7.31217L11 12.9788M21 7.31217L11 12.9788M21 7.31217V15.1038M11 12.9788V18.6455M4.57143 9.43717V15.1038L11 18.6455M11 18.6455L17.4286 15.1038V9.43717"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CollegeIcon;
