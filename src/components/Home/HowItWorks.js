import React from "react";
import illustration from "@/assets/home/illustration.png";
import Image from "next/image";

function HowItWorks() {
  return (
    <div className="px-14">
      <div className="relative">
        <div className="text-4xl pt-14">How Chora Club Works</div>
        <div className="absolute right-0 top-0">
          <Image src={illustration} width={400}></Image>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HowItWorks;
