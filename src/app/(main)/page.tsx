import Hr from "@/components/dept/Hr";

import Academics from "@/components/dept/academic";
import CR from "@/components/dept/cr";

import Design from "@/components/dept/design";
import Founder from "@/components/dept/founder";
import Marketers from "@/components/dept/marketers";

import Product from "@/components/dept/product";
import Sales from "@/components/dept/sales";
import Tech from "@/components/dept/tech";
import HeroBanner from "@/components/header/hero-banner";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto z-10 relative">
      <HeroBanner />
      <Founder />
      <Tech />
      <Product />
      <Design />
      <Marketers />
      <Hr />
      <Academics />
      <Sales />
      <CR />
    </div>
  );
}
