import React from "react";

const Moudetails = [
  {
    mouinfo: "Valid MOUs",
    totalMou: 2000,
    mouicon: <img src="" />,
  },
  {
    mouinfo: "Pending MOUs",
    totalMou: null,
    mouicon: <img src="" />,
  },
  {
    mouinfo: "Expire MOUs",
    totalMou: 500,
    mouicon: <img src="" />,
  },
  {
    mouinfo: "Hold MOUs",
    totalMou: 10,
    mouicon: <img src="" />,
  },
];
const Moucards = () => {
  return (
    <div className="flex w-[1094px] h-[175px] gap-[25px]">
      {Moudetails.map((item) => (
        <div
          className={
            "flex flex-col w-[254.75px] h-[175px] rounded-[20px] p-[25px] gap-[20px] broder-[#ececec] bg-[#c6ffd9]"
          }
        >
          <div className="flex flex-col w-[204.5px] h-[125px] gap-[10px]">
            <span className="w-[135px] h-[33px] opacity-80 font-manrope font-extrabold text-[24px] leading-[100%] text-[">
              {item.mouinfo}
                  </span>
                  <span className="w-[112px] h-[50px] gap-[4px] flex">{item.totalMou}</span>
              </div>
              <div></div>
          </div>
          
      ))}
    </div>
  );
};

export default Moucards;
