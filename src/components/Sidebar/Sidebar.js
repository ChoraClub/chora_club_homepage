"use client";

import React, { useEffect, useState } from "react";
import plus from "@/assets/sidebar/plus.png";
import Image from "next/image";
import { iconData } from "../../../config";
import { Badge } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

function Sidebar() {
  const [storedCid, setStoredCid] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

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
        return configItem
          ? { name: key, img: configItem.img }
          : { name: key, img: "" };
      });
      // console.log("Cids data: ", cids);

      setStoredCid(cids);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleBadgeClick = (name) => {
    // Remove the item from local storage
    const localData = JSON.parse(localStorage.getItem("clickedDaoName")) || {};
    delete localData[name];
    localStorage.setItem("clickedDaoName", JSON.stringify(localData));

    // Update state to reflect the change
    setStoredCid((prevState) => prevState.filter((item) => item.key !== name));
  };

  const handleImageClick = (name) => {
    router.push(`/all-daos/${name}`);
  };

  return (
    <div className="py-4">
      <div className="flex flex-col items-center gap-y-3">
        {storedCid ? (
          storedCid.map((data, index) => (
            <div className="flex flex-col items-center">
              <Badge
                content={<IoClose />}
                className="p-[0.05rem] cursor-pointer"
                color="danger"
                size="md"
                onClick={() => handleBadgeClick(data.name)}
              >
                <Image
                  key={index}
                  src={`https://gateway.lighthouse.storage/ipfs/${data.img}`}
                  alt="Image"
                  width={45}
                  height={45}
                  className={`w-11 h-11 rounded-full cursor-pointer border-2 ${
                    pathname.includes(`/all-daos/${data.name}`)
                      ? "border-green-600 border-[2.5px]"
                      : ""
                  }`}
                  priority={true}
                  onClick={() => handleImageClick(data.name)}
                ></Image>
              </Badge>

              {/* <div className="tooltip">
                <button
                  onClick={() => handleCancelClick(data.name)}
                  className="text-xs"
                >
                  Remove
                </button>
              </div> */}

              <div>
                <hr />
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-center cursor-pointer pt-5">
        <div
          className="border border-black rounded-full p-3 hover:border-[1.5px]"
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
