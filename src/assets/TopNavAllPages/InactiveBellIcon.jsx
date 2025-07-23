import React from "react";

const InactiveBellIcon = ({ size = 20, color = "#1E1E1E" }) => (
  <svg
    width={size}
    height={size + 2} // Original height was 22 for width 20
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5858 19.2497C11.4247 19.5275 11.1934 19.7581 10.915 19.9184C10.6367 20.0787 10.3212 20.1631 10 20.1631C9.67882 20.1631 9.36327 20.0787 9.08496 19.9184C8.80664 19.7581 8.57533 19.5275 8.41417 19.2497M15.5 7.33301C15.5 5.87432 14.9205 4.47537 13.8891 3.44392C12.8576 2.41247 11.4587 1.83301 10 1.83301C8.54131 1.83301 7.14236 2.41247 6.11091 3.44392C5.07946 4.47537 4.5 5.87432 4.5 7.33301C4.5 13.7497 1.75 15.583 1.75 15.583H18.25C18.25 15.583 15.5 13.7497 15.5 7.33301Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InactiveBellIcon;
