import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className=" h-screen w-full bg-bg flex flex-col items-center   justify-center py-2 px-32 gap-10 text-white">
      <div className="flex justify-center">
        <Image
          src={"/assets/icons/scroll.svg"}
          alt=""
          width={1444}
          height={64}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-brand text-[48px] font-ubuntu font-normal">
          Contact
        </p>
        <p className="font-plex font-normal text-[16px] ">
          I&#39;m currently available for freelance work
        </p>
      </div>
      <p className="font-plex font-medium flex items-center justify-center w-[400px] text-[32px] px-3 py-2 text-brand border-[3px] border-brand  rounded-tl-[40px] rounded-br-[40px] bg-bg ">
        Send Me A Message
      </p>
      <form action="" className="w-full flex flex-col gap-16 px-32">
        <div className="flex flex-row  justify-between w-full gap-48">
          <div className="flex flex-col  w-2/3">
            <label className="text-brand flex justify-start">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="border-b-[1px] border-brand bg-transparent focus:outline-none focus:border-b-2 transition-all w-full p-2 placeholder:text-white placeholder:font-ubuntu placeholder:font-normal placeholder:text-[15px] "
            />
          </div>
          <div className="flex flex-col  w-2/3">
            <label className="text-brand">Your Email *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your email"
              required
              className="border-b-[1px] border-brand bg-transparent focus:outline-none focus:border-b-2 transition-all w-full p-2 placeholder:text-white placeholder:font-ubuntu placeholder:font-normal placeholder:text-[15px] "
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="text-brand">Your Message *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your needs"
            required
            className="border-b-[1px] border-brand bg-transparent focus:outline-none focus:border-b-2 transition-all w-full p-2 placeholder:text-white placeholder:font-ubuntu placeholder:font-normal placeholder:text-[15px] "
          />
        </div>
      </form>
      <div className="flex flex-row items-center justify-center gap-2 font-ubuntu font-normal text-[16px] bg-brand text-bg rounded-3xl px-4 py-2">
        <p>Send Message</p>
        <Image src={"/assets/icons/send.svg"} alt="" width={16} height={16} />
      </div>
    </div>
  );
};

export default Contact;
