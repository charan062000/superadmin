import React from "react";

const WhiteBoard = ({ children }) => {
  return (
    <section className="w-full min-h-full max-w-[2000px] mx-auto p-[20px] bg-white rounded-[32px] border border-[#ececec] overflow-auto space-y-[20px]">
      {children}
    </section>
  );
};

export default WhiteBoard;
