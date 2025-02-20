"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  const handleClick = (route: string) => {
    router.push(route);
  };

  const getIconClass = (route: string) => {
    return pathname === route ? "bg-brand" : "";
  };

  return (
    <div className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-4 items-center border-2 bg-bg2 border-white rounded-full py-2 px-3 w-[70px] z-50">
      <div
        onClick={() => handleClick("/")}
        className={`cursor-pointer p-2 rounded-full ${getIconClass("/")}`}
      >
        <Image src="/assets/icons/menu.svg" alt="home" width={40} height={40} />
      </div>
      <div
        onClick={() => handleClick("/pages/about")}
        className={`cursor-pointer p-2 rounded-full ${getIconClass(
          "/pages/about"
        )}`}
      >
        <Image
          src="/assets/icons/aboutMe.svg"
          alt="aboutMe"
          width={40}
          height={40}
        />
      </div>
      <div
        onClick={() => handleClick("/pages/skills")}
        className={`cursor-pointer p-2 rounded-full ${getIconClass(
          "/pages/skills"
        )}`}
      >
        <Image
          src="/assets/icons/skills.svg"
          alt="skills"
          width={40}
          height={40}
        />
      </div>
      <div
        onClick={() => handleClick("/pages/works")}
        className={`cursor-pointer p-2 rounded-full ${getIconClass(
          "/pages/works"
        )}`}
      >
        <Image
          src="/assets/icons/works.svg"
          alt="works"
          width={40}
          height={40}
        />
      </div>
      <div
        onClick={() => handleClick("/pages/contact")}
        className={`cursor-pointer p-2 rounded-full ${getIconClass(
          "/pages/contact"
        )}`}
      >
        <Image
          src="/assets/icons/contactMe.svg"
          alt="contactMe"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default SideBar;
