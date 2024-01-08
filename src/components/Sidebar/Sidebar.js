"use client";

import React, { useEffect, useState } from "react";
import plus from "@/assets/sidebar/plus.png";
import Image from "next/image";
import close from "@/assets/sidebar/cancel.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { iconData } from "../../../config";

function Sidebar({ tasks, onDeleteTask }) {
  const [storedCid, setStoredCid] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const localData =
        JSON.parse(localStorage.getItem("clickedDaoName")) || {};
      // console.log("Local Data: ", localData);

      const localStorageKeys = Object.keys(localData);

      const configKeys = iconData.map((item) => item.key);

      const commonKeys = localStorageKeys.filter((key) =>
        configKeys.includes(key)
      );

      const cids = commonKeys.map((key) => {
        const configItem = iconData.find((item) => item.key === key);
        return configItem ? configItem.img : "";
      });

      // Update state with the cids
      setStoredCid(cids);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-4">
      <div className="flex flex-col items-center gap-y-3">
        {storedCid ? (
          storedCid.map((cid, index) => (
            <Image
              key={index}
              src={`https://gateway.lighthouse.storage/ipfs/${cid}`}
              alt="Image not found"
              width={45}
              height={45}
              className="rounded-full cursor-pointer"
              priority={true}
              // onMouseEnter={() => handleTooltip()}
            ></Image>
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-center cursor-pointer pt-4">
        <div
          className="border border-black rounded-xl p-2.5 hover:border-[1.5px]"
          // onClick={handleIcons}
        >
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
