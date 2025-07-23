import React from "react";
import LightNDarkModeToggle from "./LightNDarkModeToggle";
import Notifications from "./Notifications";

const TopNav = ({ children }) => {
  return (
    <section
      className="w-full flex items-center justify-between px-[20px] 
  "
    >
      <h1 className="font-lexend font-semibold text-[35px] text-black">
        {children}
      </h1>

      <div className="flex gap-[5px] items-center">
        <LightNDarkModeToggle />
        <Notifications />
      </div>
    </section>
  );
};

export default TopNav;
