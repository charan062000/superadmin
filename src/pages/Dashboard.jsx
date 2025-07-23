import React from "react";

import WhiteBoard from "../components/common/WhiteBoard";
import TopNav from "../components/common/navbar/Topnav";
import TotalRevenue from "../components/Dashboard/TotalRevenue";

const Dashboard = () => {
  return (
    <WhiteBoard>
      <div className="flex flex-col gap-[30px]">
        <TopNav>DashBoard</TopNav>
        <TotalRevenue/>
      </div>
    </WhiteBoard>
  );
};

export default Dashboard;
