"use client";

import React, { useState } from "react";
import op_logo from "../../assets/op.png";
import arbitrum_logo from "@/assets/arbitrum.jpg";
import Image from "next/image";

function ExploreDAOs() {
  const dao_info = [
    { name: "Optimism", value: "103k" },
    { name: "Arbitrum", value: "200k" },
    { name: "Aave", value: "150m" },
    { name: "Plutus Dao", value: "400" },
    { name: "Celo", value: "244k" },
  ];

  const [daoInfo, setDaoInfo] = useState(dao_info);
  return (
    <div className="grid grid-cols-4 gap-10">
      {daoInfo.map((daos) => (
        <div className="p-5 border-2 rounded-xl">
          <div className="flex justify-center">
            <Image
              src={op_logo}
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

            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 w-5/6 rounded">
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
