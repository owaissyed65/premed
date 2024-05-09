import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import React from "react";

const MainLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="h-full px-20 relative overflow-x-hidden">
      <Navbar />
      <div className="shadow-one absolute top-[38%] -left-[5px] z-0" />
      <div className="shadow-two absolute top-[10%] right-0 bg-black z-0" />
      <div className="shadow-three absolute top-[10%] -left-[5%] z-[0]" />
      <div className="shadow-four absolute top-[65%] -right-[5%] z-0" />
      <div className="shadow-five absolute top-[10%] left-[5%] z-0" />
      <div className="shadow-six absolute top-[95%] left-0 z-0" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
