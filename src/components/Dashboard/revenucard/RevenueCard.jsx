import React from "react";
import "../../../index.css";
const revenus = [
  {
    amount: 7020600,
    user: "Normal Users",
    TotalUsers: 125987,
    bg: "#F3E8FF",
    icon: (
      <img
        src="/normaluser.svg"
        className="absolute left-[140px] top-[69px] w-[97.96px] h-[112.38px] overflow-hidden"
      />
    ),
    increment: "+8% from last month",
  },
  {
    amount: 1000000,
    user: "colleges/Universities",
    TotalUsers: 125987,
    bg: "#FFF4DE",
    icon: (
      <img
        src="/school.svg"
        className="absolute left-[115px] top-[92px] w-[120px] h-[90px]"
      />
    ),
    increment: "+2% from last month",
  },
  {
    amount: 7020600,
    user: "Corporates",
    TotalUsers: 125987,
    bg: "#DCFCE7",
    icon: (
      <img
        src="/corporate.svg"
        className="absolute left-[90px] top-[80px] w-[145px] h-[101.56px]"
      />
    ),
    increment: "-2% from last month",
  },
  {
    amount: 7020600,
    user: "States",
    TotalUsers: 125987,
    bg: "#F3E8FF",
    icon: (
      <img
        src="/state.svg"
        className="absolute left-[103px] top-[35px] w-[135.76px] h-[147.76px]"
      />
    ),
    increment: "+2% from last month",
  },
];
const RevenueCard = () => {
  return (
    <div className=" flex w-[1045px] h-[184px] gap-[31px] ">
      {revenus.map((item) => (
        <div
          key={item.user}
          className="flex flex-col w-[238px] h-[184px] rounded-[16px] py-[20px] px-[26px] gap-[14px] relative overflow-hidden"
          style={{ backgroundColor: item.bg }}
        >
          <span className="w-[186px] h-[32px] font-poppins font-semibold text-[24px] leading-[32px] tracking-[0px] text-[#151D48]">
            ${item.amount}
          </span>
          <div className="flex flex-col w-[186px] h-[52px] gap-[4px] overflow-hidden">
            <span className="w-[186px] h-[24px] font-inter font-medium text-[16px] leading-[24px] tracking-[0%] text-[#425166]">
              {item.user}
            </span>
            <div className="flex w-[77px] h-[24px] gap-[5px] items-center">
              <img src="/userslogo.svg" />
              <span className="w-[58px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-[#425166] text-center">
                {item.TotalUsers}
              </span>
            </div>
            <div>{item.icon}</div>
            <div className="flex absolute top-[150px] left-[48px] w-[148px] h-[22px] items-center rounded-[16px] py-[2px] pr-[8px] pl-[6px] gap-[6px] bg-[#ecfdf3]">
              <span className="w-[8px] h-[8px] bg-green-500 rounded-full "></span>
              <span className="w-[120px] h-[18px] font-inter font-500 text-[12px] leading-[18px] text-[#667085] tracking-[0%] align-middle">
                {item.increment}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueCard;
