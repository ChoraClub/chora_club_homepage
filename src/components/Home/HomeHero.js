import Image from "next/image";
import React from "react";
import hero from "@/assets/home/hero-img2.png";
import rocket from "@/assets/home/rocket.png";
import Link from "next/link";

function HomeHero() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 ps-6 pe-4 xs:ps-10 xs:pe-6 sm:ps-16 sm:pe-10 py-3 items-center">
      <div className="lg:col-span-3">
        <div className="font-quanty text-[1.5rem] xs:text-[1.8rem] sm:text-4xl md:text-[2.5rem] 2xm:text-5xl lg:text-6xl text-light-navy-blue py-3">
          Discover<span className="font-poppins">.</span> Learn
          <span className="font-poppins">.</span> Engage
        </div>
        <div className="pb-4 xs:pb-7 font-poppins text-xs xs:text-sm sm:text-base  lg:w-1/2 md:w-2/3">
          A human-centric approach to unlocking Web3 ecosystems!
        </div>
        <div className="font-poppins">
        <Link
            href={`https://app.chora.club/`}
            target="_blank"
            className="flex bg-light-navy-blue rounded-full items-center w-fit"
          >
            <div className="text-white text-xs px-2 py-2 xs:py-[0.6rem] xs:text-sm xs:px-3 sm:px-0 sm:py-4 sm:ps-7 sm:pe-4">
              Start Your Journey
            </div>
            <div className="border border-white rounded-full p-1 me-[0.3rem] xs:p-2 xs:me-[0.4rem] sm:p-3 sm:me-2">
              <Image src={rocket} width={10} alt="rocket"></Image>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2">
        <Image
          src={hero}
          className="hover:scale-105 transition-scale duration-700 ease-in-out"
          loading="eager"
          alt="image"
          priority={true}
          quality={100}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          sizes="(min-width: 1040px) calc(40vw - 42px), (min-width: 780px) calc(50vw - 52px), (min-width: 380px) calc(100vw - 104px), calc(5vw + 238px)"
        ></Image>
      </div>
    </div>
  );
}

export default HomeHero;
