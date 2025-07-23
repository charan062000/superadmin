import React from "react";

const Bottombar = () => {
  return (
    <div>
      <button className="w-[230px] items-center h-[47px] py-[15px] px-[16px] flex justify-center gap-[12px] rounded-[10px] bg-[#eee] border border-[#ececec] hover:bg-[#dcdcdc] cursor-pointer hover:scale-95 duration-200">
        <p className="text-black">Logout</p>
      </button>
    </div>
  );
};

export default Bottombar;
