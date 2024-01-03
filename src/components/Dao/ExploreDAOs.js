"use client";

import React, { useState } from "react";
import op_logo from "../../assets/daos/op.png";
import arbi_logo from "@/assets/daos/arbitrum.jpg";
import comp_logo from "@/assets/daos/comp.png";
import aave_logo from "@/assets/daos/aave.png";
import uni_logo from "@/assets/daos/uniswap.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ExploreDAOs() {
  const dao_info = [
    { name: "Optimism", value: "10876", img: op_logo },
    { name: "Arbitrum", value: "20569", img: arbi_logo },
    { name: "Aave", value: "1508", img: aave_logo },
    { name: "Compound", value: "4002", img: comp_logo },
    { name: "Uniswap", value: "80987", img: uni_logo },
  ];

  const [daoInfo, setDaoInfo] = useState(dao_info);
  const router = useRouter();

  const handleClick = (name, img) => {
    const formattedDaoName = name.replace(/\s+/g, "-").toLowerCase();
    router.push(`/all-daos/${formattedDaoName}`);
    // console.log("Image data: ", img);

    const formattedImage = JSON.stringify(img);
    // console.log("Formatted Image data: ", formattedImage);

    localStorage.setItem(formattedDaoName, formattedImage);
  };

  return (
    <div className="grid min-[475px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
      {daoInfo.map((daos, index) => (
        <div
          key={daos.name}
          className="p-5 border rounded-2xl cursor-pointer hover:border-black"
          onClick={() => handleClick(daos.name, daos.img)}
        >
          <div className="flex justify-center">
            <Image
              src={daos.img}
              alt="Image not found"
              width={80}
              className="rounded-full"
            ></Image>
          </div>
          <div className="text-center">
            <div className="py-3">
              <div>{daos.name}</div>
              <div>{daos.value} members</div>
            </div>

            {/* <button
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 w-full rounded"
              onClick={() => handleButtonClick(daos.name)}

              href={{
                pathname: `/all-daos/${daos.name}`,
                query:  `${daos}`,
              }}
            >
              View More
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreDAOs;
