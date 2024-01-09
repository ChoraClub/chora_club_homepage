"use client";

import React, { useEffect, useState } from "react";
import home from "@/assets/sidebar/home.png";
import Image from "next/image";
import { iconData } from "../../../config";
import { Badge } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

function Sidebar() {
  const [storedCid, setStoredCid] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const [badgeVisiblity, setBadgeVisibility] = useState([]);

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

  useEffect(() => {
    setBadgeVisibility(new Array(storedCid.length).fill(true));
  }, 500);

  const handleBadgeClick = (name) => {
    // Remove the item from local storage
    const localData = JSON.parse(localStorage.getItem("clickedDaoName")) || {};
    // console.log("Badge click: ", localData);
    delete localData[name];
    localStorage.setItem("clickedDaoName", JSON.stringify(localData));

    // Update state to reflect the change
    setStoredCid((prevState) => prevState.filter((item) => item.key !== name));
    router.push(`/all-daos`);
  };

  const handleMouseEnter = (index) => {
    const updatedVisibility = [...badgeVisiblity];
    updatedVisibility[index] = true;
    setBadgeVisibility(updatedVisibility);
  };

  const handleMouseLeave = (index) => {
    const updatedVisibility = [...badgeVisiblity];
    updatedVisibility[index] = false;
    setBadgeVisibility(updatedVisibility);
  };

  const handleImageClick = (name) => {
    router.push(`/all-daos/${name}`);
  };

  return (
    <div className="py-4">
      <div className="flex flex-col items-center gap-y-3">
        {storedCid ? (
          storedCid.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Badge
                isInvisible={!badgeVisiblity[index]}
                content={<IoClose />}
                className="p-[0.1rem] cursor-pointer top-[10%] right-[10%]"
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
          className="border-2 rounded-full p-2 hover:border-slate-300"
          onClick={() => router.push("/all-daos")}
        >
          <Image src={home} width={28} alt="image" className="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
