import React from "react";

const Statistics = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-bg2 rounded-[60px] w-[180px] h-full py-6 px-6 gap-6">
      <div className="flex  items-center justify-center space-x-4 ">
        <p className="font-plex font-medium text-[48px] text-brand">4</p>
        <p className="font-plex font-regular text-[16px] text-white">
          Programming Languages
        </p>
      </div>
      <div className="flex  items-center justify-center space-x-4  ">
        <p className="font-plex font-medium text-[48px] text-brand">6</p>
        <p className="font-plex font-regular text-[16px] text-white">
          Development Tools{" "}
        </p>
      </div>
      <div className="flex  items-center justify-center space-x-4  ">
        <p className="font-plex font-medium text-[48px] text-brand">4</p>
        <p className="font-plex font-regular text-[16px] text-white">
          Years of Experience{" "}
        </p>
      </div>
    </div>
  );
};

export default Statistics;
