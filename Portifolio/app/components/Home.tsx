import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col  gap-4 text-white w-[450px] pl-10">
      <div className="w-full">
        <p className="text-brand font-plex font-normal text-[10px]">
          &lt;h1&gt;
        </p>
        <div className="font-ubuntu font-normal text-[36px] pl-4">
          <p>Hey</p>
          <p>
            I&#39;m <span className="text-brand">Nanati, </span>
          </p>
          <div className="flex items-baseline   gap-2">
            <p>Full-stack developer</p>
            <p className="text-brand  font-plex font-normal text-[10px]">
              &lt;/h1&gt;
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-brand  font-plex font-normal text-[10px]">
          &lt;p&gt;
        </p>
        <div className="pl-4">
          I help business grow by crafting amazing web experiences. If
          you&#39;re looking for a developer that likes to get stuff done,
        </div>
        <p className="text-brand  font-plex font-normal text-[10px]">
          &lt;/p&gt;
        </p>
      </div>
      <div className="flex gap-2 pl-4 ">
        <p className="text-brand font-plex font-medium text-[24px]">
          Let&#39;s Talk
        </p>
        <Image src={"/assets/icons/talk.svg"} alt="" width={40} height={40} />
      </div>
    </div>
  );
};

export default Home;
