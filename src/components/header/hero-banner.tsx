import React from "react";

const HeroBanner = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center z-[1]">
      <h1 className="text-[50px] font-extrabold">Meet Our</h1>
      <h1 className="gradient-text -mt-10 tracking-tight flex-shrink-0">
        CREATIVITY
      </h1>
      <p className="w-[70%] text-lg text-center -mt-8 font-medium">
        <strong>PreMed</strong> is on the front-lines of education in Pakistan;
        however, these are the <strong>real heroes</strong> working tirelessly
        behind the scenes, to bring you the best possible education experience
        possible!
      </p>
    </div>
  );
};

export default HeroBanner;
