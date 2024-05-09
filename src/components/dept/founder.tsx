import React from "react";
import Image from "next/image";
import Heading from "./heading";

const Founder = () => {
  return (
    <div className="flex relative flex-col items-center mt-28 gap-y-10 ">
      <Heading
        labelOne="Founders"
        para="Hasnain & Fahd: The Ying and Yang of crazy ideas. Together, they're
        unstoppable."
      />
      <div className="flex items-center justify-center gap-x-10 transition-all">
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/fp.jpeg"
            alt="founders"
            fill
            className="imageCss grayscale object-cover group-hover:grayscale-0 transition-all duration-300"
          />
          <div className="w-full absolute bottom-0 blackEffect h-[40%]" />
          <div className="absolute bottom-[10%] flex gap-y-1 flex-col items-center w-full ">
            <h2 className="text-[28px] text-white font-[700]">
              Hasnain Mankhani
            </h2>
            <p className="text-[15px] text-center text-white font-bold">
              Co-Founder
            </p>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/sp.jpeg"
            alt="founders"
            fill
            className="imageCss grayscale object-cover group-hover:grayscale-0 transition-all duration-300"
          />
          <div className="w-full absolute bottom-0 blackEffect h-[40%]" />
          <div className="absolute bottom-[10%] flex gap-y-1 flex-col items-center w-full ">
            <h2 className="text-[28px] text-white font-[700]">
              Hasnain Mankhani
            </h2>
            <p className="text-[15px] text-center text-white font-bold">
              Co-Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
