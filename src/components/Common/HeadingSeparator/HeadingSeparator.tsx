import React from "react";

const HeadingSeparator = () => {
  return (
    <div className="flex items-center space-x-[10px] lg:space-x-[20px]">
      <p className="capitalize text-[19px] text-base_color font-[600]">
        welcome
      </p>
      <div className="w-[100px] lg:w-[200px] h-[1px] bg-active_main"></div>
    </div>
  );
};

export default HeadingSeparator;
