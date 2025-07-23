import React from "react";

const ActiveBellIcon = ({
  size = 22,
  color = "#1E1E1E",
  dotColor = "#47B944",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5858 19.25C12.4247 19.5278 12.1934 19.7584 11.915 19.9187C11.6367 20.079 11.3212 20.1634 11 20.1634C10.6788 20.1634 10.3633 20.079 10.085 19.9187C9.80664 19.7584 9.57533 19.5278 9.41417 19.25M16.5 7.33331C16.5 5.87462 15.9205 4.47568 14.8891 3.44423C13.8576 2.41278 12.4587 1.83331 11 1.83331C9.54131 1.83331 8.14236 2.41278 7.11091 3.44423C6.07946 4.47568 5.5 5.87462 5.5 7.33331C5.5 13.75 2.75 15.5833 2.75 15.5833H19.25C19.25 15.5833 16.5 13.75 16.5 7.33331Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16.5" cy="16.5" r="4.5" fill={dotColor} />
  </svg>
);

export default ActiveBellIcon;
