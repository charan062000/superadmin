import React from "react";

const Moudetails = [
  {
    mouinfo: "Valid MOUs",
    totalMou: 2000,
    bg: "#C6FFD9",
    color: "#037500",
    mouicon: (
      <img
        src="validmou.svg"
        className="absolute left-[160px] top-[69px] w-[97.96px] h-[112.38px] overflow-hidden"
      />
    ),
  },
  {
    mouinfo: "Pending MOUs",
    totalMou: null,
    bg: "#FFF4CA",
    color: "#AD8700",
    mouicon: (
      <img
        src="pendingmou.svg"
        className="absolute left-[160px] top-[69px] w-[97.96px] h-[112.38px] overflow-hidden"
      />
    ),
  },
  {
    mouinfo: "Expire MOUs",
    totalMou: 500,
    bg: "#FFBEBF",
    color: "#D8003E",
    mouicon: (
      <img
        src="expiremou.svg"
        className="absolute left-[150px] top-[59px] w-[97.96px] h-[112.38px] overflow-hidden"
      />
    ),
  },
  {
    mouinfo: "Hold MOUs",
    totalMou: 10,
    bg: "#ECECEC",
    color: "#555555",
    mouicon: (
      <img
        src="holdmou.svg"
        className="absolute left-[160px] top-[69px] w-[97.96px] h-[112.38px] overflow-hidden"
      />
    ),
  },
];
const Moucards = () => {
  return (
    <div className="flex w-[1094px] h-[175px] gap-[25px] ">
      {Moudetails.map((item) => (
        <div key={item.mouinfo}
          className="flex flex-col w-[254.75px] h-[175px] rounded-[20px] p-[25px] gap-[20px] broder-[#ececec] relative"
          style={{
            backgroundColor: item.bg,
            
          }}
        >
          <div className="flex flex-col w-[204.5px] h-[125px] gap-[10px]">
            <span
              className=" opacity-80 font-manrope font-extrabold text-[24px] leading-[100%] text-[#037500]"
              style={{
                color: item.color,
              }}
            >
              {item.mouinfo}
            </span>
            <span className="w-[112px] h-[50px] gap-[4px] flex flex-col ">
              <p className="w-[112px] h-[50px] font-lexend font-semibold text-[40px] leading-[100%] text-[#222222]">
                {item.totalMou > 0 ? item.totalMou : "--"}
              </p>
            </span>
            <div className="flex w-[93px] h-[22px] rounded-[5px] px-[10px] py-[2px] gap-[6px] bg-[#edfff3]">
              <p className="w-[73px] h-[18px] font-inter font-semibold text-[12px] leading-[18px] text-center text-[#667085]">
                View Details
              </p>
            </div>
            <div>{item.mouicon}</div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Moucards;
