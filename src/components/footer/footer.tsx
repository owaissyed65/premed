import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="mt-8 flex flex-col px-18 max-w-screen-2xl mx-auto z-10 relative">
      <div className="flex flex-col">
        <h1 className="text-[60px] text-center font-extrabold">
          Join the Pre<span className="text-premed-Theme ">M</span>ed{" "}
          <span className="text-premed-Theme">Team</span>
        </h1>
        <p className="p-12 px-14 font-medium text-[24px] text-center">
          Join Pre<span className="text-premed-Theme">M</span>ed today and
          become part of the revolution to break the shackles of orthodoxy and
          change the education system of our{" "}
          <span className="text-[#008000]">Pakistan</span>!
        </p>
      </div>
      <div className="flex justify-center gap-x-4 text-white font-semibold ">
        <Button
          className="w-[132.565px] bg-premed-Theme hover:bg-premed-Theme/90 transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          Apply Now
        </Button>
        <Button
          className="bg-premed-WhiteTheme border-2 text-premed-Theme hover:bg-premed-WhiteTheme/90 transition-all duration-300 ease-in-out w-[132.565px]"
          style={{
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(20px)",
            borderRadius: "var(--Container-corner-radius, 10px)",
            border: " 3px solid var(--Gradients-Angular-Awesomeness, #FF9D3F)",
          }}
        >
          Learn More
        </Button>
      </div>
      {/* main Footer */}
      <div className="grid grid-cols-2 gap-x-4 mt-8">
        <div className="flex flex-col pr-4">
          <div className="w-[150px] h-[100px] relative">
            <Image
              src={"/premedlogo.png"}
              alt="Premed logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="pb-8 text-[20px] font-medium">
            Your all-in-one platform for MDCAT and other medical entry tests
            preparation. With over 100,000 questions and detailed explanations,
            we're here to help you ace your exams and achieve your dreams
          </p>
          <div>
            <h6 className="text-[15px] font-semibold">Find Us on Socials</h6>
            <div className="flex items-center gap-6">
              <div className="flex gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M24.175 27.5H5.825C3.9875 27.5 2.5 26.0125 2.5 24.175V5.825C2.5 3.9875 3.9875 2.5 5.825 2.5H24.1625C26.0125 2.5 27.5 3.9875 27.5 5.825V24.1625C27.5 26.0125 26.0125 27.5 24.175 27.5Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 22.5V10.4375C15 7.87497 17.05 7.07497 19.1 7.69997"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.875 13.75H18.125"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M24.175 27.5H5.825C3.9875 27.5 2.5 26.0125 2.5 24.175V5.825C2.5 3.9875 3.9875 2.5 5.825 2.5H24.1625C26.0125 2.5 27.5 3.9875 27.5 5.825V24.1625C27.5 26.0125 26.0125 27.5 24.175 27.5Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 15C20 17.7625 17.7625 20 15 20C12.2375 20 10 17.7625 10 15C10 12.2375 12.2375 10 15 10C17.7625 10 20 12.2375 20 15Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.75 6.875C23.75 7.225 23.475 7.5 23.125 7.5C22.775 7.5 22.5 7.225 22.5 6.875C22.5 6.525 22.775 6.25 23.125 6.25C23.475 6.25 23.75 6.525 23.75 6.875Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="28"
                  viewBox="0 0 31 28"
                  fill="none"
                >
                  <path
                    d="M24.3959 0H29.1458L18.7686 11.8605L30.9766 28H21.4178L13.9311 18.2115L5.36451 28H0.611692L11.7112 15.3138L0 0H9.80143L16.5688 8.94708L24.3959 0ZM22.7288 25.1569H25.3608L8.37128 2.69374H5.54687L22.7288 25.1569Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                >
                  <path
                    d="M25.4391 25H6.51406C4.83906 25 3.47656 23.5875 3.47656 21.825V8.1625C3.47656 6.4125 4.83906 5 6.51406 5H25.4516C27.1141 5 28.4766 6.4125 28.4766 8.1625V21.825C28.4766 23.5875 27.1141 25 25.4391 25Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2266 10V20L20.9766 14.45L12.2266 10Z"
                    stroke="black"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="relative w-[100px] h-[30px]">
                <Image
                  src="/nep.png"
                  alt="asc"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-x-4 py-4 justify-between">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-4xl text-premed-Theme font-bold tracking-tight">
              About Us
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Vision
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Blog
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Testimonials
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Scholarships
            </Link>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2 className="text-4xl text-premed-Theme font-bold tracking-tight">
              Career
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Meet The Team
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Ambassadors
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Join Us
            </Link>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2 className="text-4xl text-premed-Theme font-bold tracking-tight">
              Support
            </h2>
            <div
              className="w-[88px] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #EC5863 0%, rgba(236, 88, 99, 0.00) 100%)",
              }}
            />
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Contact
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              FAQs
            </Link>
            <Link href={"/"} className="text-[#14142B] font-normal w-fit">
              Pricing
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly py-4 px-32 mt-5">
        <span className="text-[15px] text-[#4E4B66] font-medium">
          &copy; 2021-2024, All Rights Reserved, PreMed.PK
        </span>

        <span className="text-[15px] text-[#4E4B66] font-medium">
          Privacy Policy
        </span>
        <span className="text-[15px] text-[#4E4B66] font-medium">
          Terms and Conditions
        </span>
      </div>
    </div>
  );
};

export default Footer;
