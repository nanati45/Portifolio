import Description from "@/app/components/Description";
import Home from "@/app/components/Home";
import Statistics from "@/app/components/Statistics";
import TopNavBar from "@/app/components/TopNavBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-bg w-full h-screen space-y-6">
      <TopNavBar />
      <div className="space-y-6 w-full ">
        <div className="flex items-center justify-center font-ubuntu font-normal text-[72px] text-brand2">
          Developer
        </div>
        <div className="flex items-center justify-center w-full gap-16">
          <div className="flex flex-row gap-6 items-center justify-center">
            <Description />

            <Home />
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
