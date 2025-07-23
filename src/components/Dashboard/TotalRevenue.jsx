import React from "react";

import RevenueCard from "./revenucard/RevenueCard";
import Moucards from "./moucard/Moucards";

const TotalRevenue = () => {
  return (
    <div className="flex flex-col items-center w-fill[1105px] h-[383px] rounded-[20px] border p-[30px] gap-[25px] bg-[#f8fafc] border-[#eeeeee]">
      <div className="flex w-[1045px] h-[114px] justify-between">
        <div className="flex flex-col w-[318px] h-[114px]">
          <p className="w-[318px] h-[82px] font-manrope font-extrabold text-[60px] text-[#05004E] leading-[100%]">
            13,012,980
          </p>
          <span className=" flex w-[318px] h-[32px] gap-[10px] items-end">
            <p className="w-[173px] h-[32px] font-poppins font-600 text-[20px] leading-[32px] text-[#05004e]">
              Today's revenue
            </p>
            <p className="w-[86px] h-[30px] font-poppins font-normal text-[16px] text-[#737791]">
              this month
            </p>
          </span>
        </div>
        <div className="flex w-[292px] h-[63px] gap-[10px] items-end">
          <div className="flex flex-col w-[167px] h-[62px] gap-[5px] ">
            <span className="w-[86px] h-[14px] font-inter font-semibold text-[12px] text-[#3a3a3a]">
              custom Month
            </span>
            <div className="flex items-center w-[167px] h-[44px] rounded-[10px] border p-[15px] gap-[20px] bg-[#ffffff] border-[#dcdcdc]">
              <span className="w-[93px] h-[14px] font-inter font-medium text-[14px] leading-[14px] tracking-[0%] text-[#555555]">
                January 2025
              </span>
              <img className="w-[24px] h-[24px]" src="/calander.png" />
            </div>
          </div>
          <div className="w-[115px] h-[44px] rounded-[10px] p-[15px] gap-[20px] bg-[#0070ff] flex items-center">
            <p className="w-[85px] h-[14px] font-inter font-bold text-[14px] leading-[14px] tracking-[0%] text-[#ffffff]">
              View Report
            </p>
          </div>
        </div>
      </div>
      {/* revenue cards */}
      <RevenueCard />
      <Moucards />
    </div>
  );
};

export default TotalRevenue;
