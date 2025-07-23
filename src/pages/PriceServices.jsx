import React from "react";
import TopNav from "../components/common/navbar/Topnav";
import WhiteBoard from "../components/common/WhiteBoard";
const PriceServices = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>Price Control</TopNav>
      </div>
    </WhiteBoard>
  );
};

export default PriceServices;
