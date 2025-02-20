import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className=" h-screen w-full bg-[url('/assets/images/bg3.svg')] bg-cover bg-center bg-no-repeat flex flex-col  justify-center py-2 px-32 gap-10 text-white">
      <div className="flex justify-center">
        <Image
          src={"/assets/icons/scroll.svg"}
          alt=""
          width={1444}
          height={64}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-brand text-[48px] font-ubuntu font-normal">Works</p>
        <p className="font-plex font-normal text-[16px] ">
          I had the pleasure of working with these awesome projects
        </p>
      </div>
      <div className="flex flex-row items-center  justify-between  px-32 gap-2 ">
        <div className="flex justify-end">
          <Image src={"/assets/icons/left.svg"} alt="" width={63} height={62} />
        </div>

        <div className="flex flex-row items-center justify-center gap-4 p-4">
          <div>
            <Image
              src={"/assets/images/pc.png"}
              alt="pc"
              width={200}
              height={300}
            />
          </div>
          <div className="flex flex-col items-baseline  justify-center gap-6">
            <div className="flex gap-3 flex-row items-center   text-brand ">
              <div>
                <p className="font-plex font-normal text-[24px]">
                  View Website
                </p>
                <p className="h-[1px] bg-white"></p>
              </div>
              <div className="flex items-baseline justify-center">
                <Image
                  src={"/assets/icons/click.svg"}
                  alt=""
                  width={17}
                  height={17}
                  className=""
                />
              </div>
            </div>
            <div>
              <Image
                src={"/assets/images/desktop.png"}
                alt="pc"
                width={200}
                height={230}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <Image
            src={"/assets/icons/right.svg"}
            alt=""
            width={63}
            height={62}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
