"use client";

import React, { useEffect, useState } from "react";
import plus from "@/assets/sidebar/plus.png";
import Image from "next/image";
import close from "@/assets/sidebar/cancel.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Sidebar() {
  const [storedSrc, setStoredSrc] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dao_info = [
    { name: "Optimism" },
    { name: "Arbitrum" },
    { name: "Aave" },
    { name: "Compound" },
    { name: "Uniswap" },
  ];

  useEffect(() => {
    const fetchData = () => {
      const addData = {};

      dao_info.forEach((dao) => {
        const daoName = dao.name.toLowerCase(); // Convert dao name to lowercase for consistency

        const imageData = localStorage.getItem(daoName);

        console.log("Image Data", imageData);

        if (imageData) {
          const parsedData = JSON.parse(imageData);
          const src = parsedData.src;
          console.log(`${dao.name} Image data: `, src);
          addData[daoName] = src;
        } else {
          console.log(`${dao.name} - Error in fetching`);
        }
      });
      setStoredSrc(addData);
    };
    fetchData();
  }, []);

  const handleTooltip = (name) => {
    console.log("Tooltip name: ", name);
    localStorage.removeItem(name);
    console.log("Item removed");
  };

  return (
    <div className="py-4">
      <div className="flex flex-col items-center gap-y-3">
        {dao_info.map((dao) => {
          console.log("Daos: ", dao.name);
          const daoName = dao.name.toLowerCase();
          const src = storedSrc[daoName];
          console.log("Source url: ", src);

          return (
            <a
              data-tooltip-id="my-tooltip"
              // data-tooltip-html="<Image src={close} alt='Image'/>"
              // data-tooltip-html="<div style='background-color: red; padding: 8px; border-radius: 8px' onclick='handleTooltip(${dao.name})'>Leave</div>"
              data-tooltip-place="right"
              onMouseEnter={() => setIsOpen(true)}
            >
              <Image
                src={src || ""}
                alt="Image not found"
                width={45}
                height={45}
                className="rounded-full cursor-pointer"
                priority={true}
                onMouseEnter={() => handleTooltip()}
              ></Image>
            </a>
          );
        })}
        <Tooltip id="my-tooltip" isOpen={isOpen} />
      </div>

      <div className="flex justify-center cursor-pointer pt-4">
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
