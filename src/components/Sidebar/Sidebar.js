"use client";

import React, { useEffect, useState } from "react";
import plus from "@/assets/sidebar/plus.png";
import Image from "next/image";

function Sidebar() {
  const [storedSrc, setStoredSrc] = useState("");

  useEffect(() => {
    const imageOp = localStorage.getItem("optimism") || "";

    const imageArb = localStorage.getItem("arbitrum") || "";

    if (imageOp) {
      const parsedData = JSON.parse(imageOp);
      const src = parsedData.src;
      console.log("Image data: ", parsedData.src);
      console.log("End");

      setStoredSrc(src);
    } else {
      console.log("Error in fetching");
    }
  });

  return (
    <div className="py-4">
      <div className="flex justify-center py-3">
        <Image
          src={storedSrc || ""}
          alt="Image not found"
          width={45}
          height={45}
          className="rounded-full"
          priority={true}
        ></Image>
      </div>
      <div className="flex justify-center cursor-pointer">
        <div className="border border-black rounded-xl p-2.5 hover:border-[1.5px]">
          <Image
            src={plus}
            width={16}
            alt="image not found"
            className=""
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
