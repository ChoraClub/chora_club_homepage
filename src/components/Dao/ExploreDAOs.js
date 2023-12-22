"use client";

import React, { useState } from "react";
import op_logo from "../../assets/op.png";
import arbitrum_logo from "@/assets/arbitrum.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ExploreDAOs() {
  const dao_info = [
    { name: "Optimism", value: "10876", img: op_logo },
    { name: "Arbitrum", value: "20569", img: arbitrum_logo },
    { name: "Aave", value: "1508", img: op_logo },
    { name: "Plutus Dao", value: "4002", img: arbitrum_logo },
    { name: "Celo", value: "80987", img: op_logo },
  ];

  const [daoInfo, setDaoInfo] = useState(dao_info);
  const router = useRouter();

  const handleButtonClick = (name) => {
    const formattedDaoName = name.replace(/\s+/g, "-").toLowerCase();
    router.push(`/all-daos/${formattedDaoName}`);
  };

  return (
    <div className="grid min-[475px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-10">
      {daoInfo.map((daos) => (
        <div className="p-5 border-2 rounded-xl">
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
              <div>{daos.value} votes</div>
            </div>

            <button
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 w-full rounded"
              onClick={() => handleButtonClick(daos.name)}

              // href={{
              //   pathname: `/all-daos/${daos.name}`,
              //   query:  `${daos}`,
              // }}
            >
              View More
            </button>
          </div>
        </div>
      ))}

      {/* <div className="p-4 border-2 rounded-xl">
        <div className="flex justify-center">
          <Image
            src={arbitrum_logo}
            alt="Image not found"
            width={80}
            className="rounded-full"
          ></Image>
        </div>
        <div className="text-center">
          <div className="py-3">
            <div>Arbitrum</div>
            <div>103k votes</div>
          </div>

          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-full rounded">
            Join
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default ExploreDAOs;
