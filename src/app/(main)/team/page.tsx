import TeamHeading from "@/components/team/team-heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { Suspense } from "react";

const promiseTeam: () => Promise<number[]> = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const newArray = new Array(9).fill(0).map((_, i) => i + 1);
      resolve(newArray);
    }, 3000);
  });

const Page = async () => {
  return (
    <div className="relative flex flex-col gap-y-4 pb-24">
      <div className="mt-20 flex flex-col justify-center z-[1] gap-y-2 ">
        <TeamHeading />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>
    </div>
  );
};
const Team = async () => {
  const data = await promiseTeam();
  return (
    <div className="flex flex-col items-center gap-y-8">
      {data?.map((item) => (
        <div
          className={cn(
            "grid grid-cols-3 relative flex-wrap mt-20 gap-x-10 shrink-0 "
          )}
          key={item}
        >
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
      ))}
    </div>
  );
};
export default Page;
