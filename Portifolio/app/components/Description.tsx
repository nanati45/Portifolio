import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div
      className="flex flex-col items-center justify-center font-plex font-normal text-[12px] text-white gap-4 border-4 rounded-tl-[150px] rounded-br-[150px]  w-[270px] py-6 px-2 mr-3  shadow-[0_-5px_5px_-2px_#12F7D6,-5px_0_5px_-2px_#12F7D6]
 "
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className=" w-[64px] h-[64px] border-2 border-white rounded-full">
          <Image
            src={"/assets/images/pp.jpg"}
            alt="profile picture"
            width={64}
            height={64}
            className="w-[64px] h-[64px] rounded-full"
          />
        </div>
        <div className="text-center ">
          <p className="font-plex font-medium text-[24px]">Nanati</p>
          <p className="font-plex font-medium text-[14px]">
            Full stack Developer
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2">
          <Image
            src={"/assets/icons/email.svg"}
            alt="email"
            width={14}
            height={14}
          />{" "}
          nansiasamnew@gmail.com
        </li>
        <li className="flex gap-2">
          <Image
            src={"/assets/icons/location.svg"}
            alt="location"
            width={14}
            height={14}
          />
          Ethiopia
        </li>
        <li className="flex gap-2">
          <Image
            src={"/assets/icons/job.svg"}
            alt="job"
            width={14}
            height={14}
          />
          Full-time / Frelancer
        </li>
        <li className="flex gap-2">
          <Image
            src={"/assets/icons/links.svg"}
            alt="links"
            width={14}
            height={14}
          />
          www.nanatiasamnew.com
        </li>
      </ul>
      <div className="flex justify-between items-center gap-2 text-bg">
        <div className=" bg-brand rounded-md px-2 py-1">HTML</div>
        <div className=" bg-brand rounded-md px-2 py-1">CSS</div>
        <div className=" bg-brand rounded-md px-2 py-1">JS</div>
        <div className=" bg-brand rounded-md px-2 py-1">REACT</div>
      </div>
      <div className="flex items-center justify-center text-[16px] gap-3 px-3 py-2 rounded-full bg-white text-bg">
        Download CV{" "}
        <span>
          <Image
            src={"/assets/icons/download.svg"}
            alt="download"
            width={16}
            height={16}
          />
        </span>
      </div>
    </div>
  );
};

export default Description;
