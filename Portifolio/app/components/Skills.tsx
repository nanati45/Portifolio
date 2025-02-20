import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/assets/images/bg2.svg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-6 px-32 gap-10 text-white">
      <div className="absolute top-8 right-1/4 text-brand text-[124px]">
        &lt;/&gt;
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/icons/scroll.svg"}
          alt=""
          width={1444}
          height={64}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-brand text-[48px] font-ubuntu font-normal">Skills</p>
        <p className="font-plex font-normal text-[16px] ">
          I am striving to never stop learning and improving
        </p>
      </div>
      <div className="h-[132px] flex flex-row">
        <div className="w-2 bg-[#0C73B8] rounded-l-md"></div>
        <div className="bg-brand2 w-[296px] rounded-r-md text-bg flex flex-col justify-center items-center">
          <Image src={"/assets/icons/pc.svg"} alt="pc" width={32} height={32} />
          <p className="font-plex font-normal text-[24px]">Web Development</p>
          <div className="flex flex-row items-center justify-center font-plex font-normal text-[16px]">
            <p>HTML</p>
            <p>.</p>
            <p>CSS</p>
            <p>.</p>
            <p>JS</p>
            <p>.</p>
            <p>REACT</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-16 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center h-[108px]  w-[108px] rounded-full bg-[#E54F26]">
            <Image
              src={"/assets/icons/html.svg"}
              alt=""
              width={48}
              height={48}
              className="fill-white"
            />
          </div>
          <p className="font-plex font-medium text-[24px] text-[#E54F26]">
            HTML
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center h-[108px]  w-[108px] rounded-full bg-[#0C73B8]">
            <Image
              src={"/assets/icons/css.svg"}
              alt=""
              width={48}
              height={48}
            />
          </div>
          <p className="font-plex font-medium text-[24px] text-[#0C73B8]">
            CSS
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center  h-[108px]  w-[108px] rounded-full bg-[#E7A020]">
            <Image src={"/assets/icons/js.svg"} alt="" width={48} height={48} />
          </div>
          <p className="font-plex font-medium text-[24px] text-[#E7A020]">JS</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center  h-[108px]  w-[108px] rounded-full bg-[#28A9E0]">
            <Image
              src={"/assets/icons/react.svg"}
              alt=""
              width={48}
              height={48}
            />
          </div>
          <p className="font-plex font-medium text-[24px] text-[#28A9E0]">
            REACT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
