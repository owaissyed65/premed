import React from "react";
import Image from "next/image";
import Heading from "./heading";

const Product = () => {
  return (
    <div className="flex relative flex-col items-center mt-20 gap-y-10 mb-5 ">
        <div className="shadow-seven absolute -top-[15%] -right-[10%]"/>
      <Heading
        labelOne="Product"
        labelTwo="Team"
        para="One Man. Three Websites. What Could Possibly Go Wrong?"
      />
      <div className="flex items-center justify-center gap-x-10 transition-all">
        <div className="relative w-[350px] h-[350px] group transition-all duration-300 rounded-[50px]">
          <Image
            src="/fftp.jpeg"
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
              Lead User Interface Designer
            </p>
            <p className="opacity-0 -translate-y-4 text-[15px] text-center text-white font-bold  group-hover:translate-y-2 transition duration-300 group-hover:opacity-100">
              Doctor, Designer, Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
