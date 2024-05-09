import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import NavbarActions from "./navbar-actions";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-2 py-[25px] flex gap-x-10 justify-between items-center z-[20] sticky">
      {/* Logo */}
      <Link className="relative w-20 h-16" href={"/"}>
        <Image
          src={"/premedlogo.png"}
          alt="Premed logo"
          fill
          className="object-contain"
        />
      </Link>
      {/* actions */}
      <NavbarActions />
      {/* buttons */}
      <div className="flex gap-x-4 text-white font-semibold ">
        <Button
          className="w-[132.565px] bg-premed-Theme hover:bg-premed-Theme/90 transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          Get Started
        </Button>
        <Button
          className="bg-premed-WhiteTheme text-premed-Theme hover:bg-premed-WhiteTheme/90 transition-all duration-300 ease-in-out w-[132.565px]"
          style={{
            boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
