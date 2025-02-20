"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TopNavBar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavigation = (name: string, path: string) => {
    setActiveLink(name);
    router.push(path);
  };

  return (
    <div className="bg-bg px-[100px] font-plex">
      <div className="flex justify-between items-center bg-bg text-white py-[30px] border-b-1 border-b-white">
        <div
          className="flex gap-3 text-[32px] font-medium cursor-pointer"
          onClick={() => handleNavigation("Home", "/")}
        >
          <span className="text-brand">&lt;C/&gt;</span>
          NanatiAsamnew
        </div>
        <div className="flex gap-5 items-center text-[14px] font-normal">
          <p
            className={`cursor-pointer ${
              activeLink === "Home" ? "text-brand" : "text-white"
            }`}
            onClick={() => handleNavigation("Home", "/")}
          >
            Home
          </p>
          <p
            className={`cursor-pointer ${
              activeLink === "About Me" ? "text-brand" : "text-white"
            }`}
            onClick={() => handleNavigation("About Me", "/pages/about")}
          >
            About Me
          </p>
          <p
            className={`cursor-pointer ${
              activeLink === "Skills" ? "text-brand" : "text-white"
            }`}
            onClick={() => handleNavigation("Skills", "/pages/skills")}
          >
            Skills
          </p>
          <p
            className={`cursor-pointer ${
              activeLink === "Works" ? "text-brand" : "text-white"
            }`}
            onClick={() => handleNavigation("Works", "/pages/works")}
          >
            Works
          </p>
          <p
            className={`cursor-pointer ${
              activeLink === "Contact Me" ? "text-brand" : "text-white"
            }`}
            onClick={() => handleNavigation("Contact Me", "/pages/contact")}
          >
            Contact Me
          </p>
          <div className="flex gap-2 text-[12px] cursor-pointer">
            <Image
              src={"/assets/icons/instagram.svg"}
              alt="Instagram"
              width={20}
              height={20}
            />
            <p>Instagram</p>
          </div>
          <div className="flex gap-2 text-[12px] cursor-pointer">
            <Image
              src={"/assets/icons/github.svg"}
              alt="GitHub"
              width={20}
              height={20}
            />
            <p>Github</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#43454D]"></div>
    </div>
  );
};

export default TopNavBar;
