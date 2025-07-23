import React from "react";
import TopNav from "../components/common/navbar/Topnav";
import WhiteBoard from "../components/common/WhiteBoard";
const CsvManagement = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>CSV Management</TopNav>
      </div>
    </WhiteBoard>
  );
};

export default CsvManagement;
