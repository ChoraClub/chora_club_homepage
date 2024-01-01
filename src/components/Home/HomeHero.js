import Image from "next/image";
import React, { lazy } from "react";
import hero from "@/assets/home/hero-img2.png";
import rocket from "@/assets/home/rocket.png";

function HomeHero() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 ps-16 pe-10 py-3 items-center">
      <div className="lg:col-span-3">
        <div className="font-quanty text-6xl md:text-[2.5rem] 2xm:text-5xl lg:text-6xl text-light-navy-blue py-3">
          Discover<span className="font-poppins">.</span> Learn
          <span className="font-poppins">.</span> Engage
        </div>
        <div className="pb-7 font-poppins lg:w-1/2 md:w-2/3">
          A human-centric approach to unlocking Web3 ecosystems!
        </div>
        <div className="font-poppins">
          <button className="flex bg-light-navy-blue rounded-full items-center">
            <div className="text-white py-4 ps-7 pe-4 text-sm">
              Start Your Journey
            </div>
            <div className="border border-white rounded-full p-3 me-2">
              <Image src={rocket} width={10} alt="rocket"></Image>
            </div>
          </button>
        </div>
      </div>
      <div className="lg:col-span-2">
        <Image
          src={hero}
          alt="image"
          priority={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
    </div>
  );
}

export default HomeHero;
