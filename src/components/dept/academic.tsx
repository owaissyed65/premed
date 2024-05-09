import React from "react";
import Image from "next/image";
import Heading from "./heading";
import Link from "next/link";

const Academics = () => {
  return (
    <div className="flex relative flex-col items-center mt-20 gap-y-10 mb-5">
      <Heading
        labelOne="Academics"
        labelTwo="Nerds"
        para="Warning: May contain dangerous levels of knowledge and enthusiasm for learning."
      />
      <div className="flex items-center justify-center gap-x-10 transition-all">
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/tp.jpeg"
            alt="founders"
            fill
            className="imageCss grayscale object-cover group-hover:grayscale-0 transition-all duration-300 object-top"
          />
          <div className="w-full absolute bottom-0 blackEffect h-[40%] transition duration-300" />
          <div className="absolute bottom-[10%] flex gap-y-1 flex-col items-center w-full ">
            <h2 className="text-[28px] text-white font-[700] translate-y-[34px]">
              Salis Salman
            </h2>
            <p className="text-[15px] translate-y-[32px] text-center text-white font-bold  group-hover:translate-y-4 transition duration-300 group-hover:opacity-0">
              Head Of Tech Team
            </p>
            <p className="opacity-0 -translate-y-4 text-[15px] text-center text-white font-bold  group-hover:translate-y-2 transition duration-300 group-hover:opacity-100">
              Yes, I Control the department
            </p>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/ftp.jpeg"
            alt="founders"
            fill
            className="imageCss grayscale object-cover group-hover:grayscale-0 transition-all duration-300 object-top"
          />
          <div className="w-full absolute bottom-0 blackEffect h-[40%] transition duration-300" />
          <div className="absolute bottom-[10%] flex gap-y-1 flex-col items-center w-full ">
            <h2 className="text-[28px] text-white font-[700] translate-y-[34px]">
              Salis Salman
            </h2>
            <p className="text-[15px] translate-y-[32px] text-center text-white font-bold  group-hover:translate-y-4 transition duration-300 group-hover:opacity-0">
              Head Of App Development
            </p>
            <p className="opacity-0 -translate-y-4 text-[15px] text-center text-white font-bold  group-hover:translate-y-2 transition duration-300 group-hover:opacity-100">
              Sonic Of App Development
            </p>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/ftp.jpeg"
            alt="founders"
            fill
            className="imageCss grayscale object-cover group-hover:grayscale-0 transition-all duration-300 object-top"
          />
          <div className="w-full absolute bottom-0 blackEffect h-[40%] transition duration-300" />
          <div className="absolute bottom-[10%] flex gap-y-1 flex-col items-center w-full ">
            <h2 className="text-[28px] text-white font-[700] translate-y-[34px]">
              Salis Salman
            </h2>
            <p className="text-[15px] translate-y-[32px] text-center text-white font-bold  group-hover:translate-y-4 transition duration-300 group-hover:opacity-0">
              Head Of App Development
            </p>
            <p className="opacity-0 -translate-y-4 text-[15px] text-center text-white font-bold  group-hover:translate-y-2 transition duration-300 group-hover:opacity-100">
              Sonic Of App Development
            </p>
          </div>
        </div>
      </div>
      <Link href={"/"} className="buttonCss">
        Meet the full team
      </Link>
    </div>
  );
};

export default Academics;
