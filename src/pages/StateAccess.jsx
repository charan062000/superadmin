import React from "react";
import TopNav from "../components/common/navbar/Topnav";
import WhiteBoard from "../components/common/WhiteBoard";

const StateAccess = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>State Access</TopNav>
      </div>
    </WhiteBoard>
  );
};

export default StateAccess;
