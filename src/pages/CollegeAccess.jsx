import React from "react";
import TopNav from "../components/common/navbar/Topnav";
import WhiteBoard from "../components/common/WhiteBoard";
const CollegeAccess = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>College Access</TopNav>
      </div>
    </WhiteBoard>
  );
};

export default CollegeAccess;
