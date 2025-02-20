import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="h-screen w-full bg-[url('/assets/images/bg1.svg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-6 px-32 gap-6 text-white">
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/icons/scroll.svg"}
          alt=""
          width={1444}
          height={96}
        />
      </div>
      <div className="flex flex-row gap-24">
        <div className="flex flex-col items-start justify-center gap-6 w-2/3 ">
          <div className="font-ubuntu font-normal flex items-start justify-center w-[240px] text-[48px] px-3 py-2 text-white border-[3px] border-brand  rounded-tl-[40px] rounded-br-[40px] bg-bg ">
            About Me
          </div>
          <div className="bg-bg rounded-[20px] px-4 py-3">
            <p className="text-brand font-plex font-normal text-[10px]">
              &lt;p&gt;
            </p>
            <div className="pl-4 font-plex font-normal text-[14px]">
              <p className="font-plex font-medium text-[24px] text-brand">
                Hello!
              </p>
              My name is Sinan and I specialize in web developement that
              utilizes <span className="text-brand"> HTML </span>,{" "}
              <span className="text-brand">CSS </span>,{" "}
              <span className="text-brand">JS </span>, and{" "}
              <span className="text-brand"> REACT </span> etc.
              <p>
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving. When I'm not
                coding, I am writing bolgs, reading, or picking up some new
                hands-on art project like photography. I like to have my
                perspective and belief systems challenged so that I see the
                world through new eyes.
              </p>
            </div>
            <p className="text-brand font-plex font-normal text-[10px]">
              &lt;/p&gt;
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/coder.svg"}
            alt="coder"
            width={462}
            height={557}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
