import React from "react";
import TopNav from "../components/common/navbar/Topnav";
import WhiteBoard from "../components/common/WhiteBoard";
const MouManagment = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>Mou Managment</TopNav>
      </div>
    </WhiteBoard>
  );
};

export default MouManagment;
