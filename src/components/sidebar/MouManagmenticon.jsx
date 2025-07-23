import React from "react";

const MouIcon = ({ color = "#222222" }) => (
  <svg
    width="15"
    height="18"
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33333 14.2455H11.6667V12.5455H3.33333V14.2455Z"
      fill={color}
      stroke={color}
    />
    <path
      d="M11.6667 10.8455H3.33333V9.14551H11.6667V10.8455Z"
      fill={color}
      stroke={color}
    />
    <path
      d="M3.33333 7.44551H6.66667V5.74551H3.33333V7.44551Z"
      fill={color}
      stroke={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 0.645508C1.11929 0.645508 0 1.78719 0 3.19551V15.0955C0 16.5039 1.11929 17.6455 2.5 17.6455H12.5C13.8807 17.6455 15 16.5039 15 15.0955V6.59551C15 3.30942 12.3883 0.645508 9.16667 0.645508H2.5ZM2.5 2.34551H8.33333V6.59551H13.3333V15.0955C13.3333 15.565 12.9602 15.9455 12.5 15.9455H2.5C2.03977 15.9455 1.66667 15.565 1.66667 15.0955V3.19551C1.66667 2.72607 2.03977 2.34551 2.5 2.34551ZM10 2.43052C11.3427 2.70854 12.4511 3.64521 12.9867 4.89551H10V2.43052Z"
      fill={color}
      stroke={color}
    />
  </svg>
);

export default MouIcon;
