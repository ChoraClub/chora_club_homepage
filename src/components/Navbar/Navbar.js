"use client";

import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import logo from "@/assets/navbar/navbar-logo.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreenNav = () => {
    setIcon(!menuIcon);
  };

  return (
    <header className="font-poppins">
      {/* <ConnectButton className="connectbutton" /> */}
      <div className="m-3 bg-black sticky top-0 rounded-full">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              className="pl-2 xs:pl-4 sm:pl-6 md:pl-8"
              onClick={handleSmallerScreenNav}
            >
              <Image src={logo} alt="logo" className="w-36 md:w-44"></Image>
            </Link>

            <ul className="flex gap-x-6 text-white">
              {/* <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li> */}

              <li className="px-2">
                <div className="bg-light-navy-blue px-2 py-1 rounded-full font-medium text-xs xs:px-3 xs:text-sm sm:text-base sm:px-4 md:px-5 md:py-2">Connect </div>
              </li>
            </ul>

            {/* <ConnectButton className="connectbutton" /> */}

            {/* <div
              onClick={handleSmallerScreenNav}
              className="flex md:hidden text-white pe-2"
            >
              {menuIcon ? (
                <AiOutlineClose size={25} className="" />
              ) : (
                <AiOutlineMenu size={25} className="" />
              )}
            </div> */}

            {/* <div
              className={
                menuIcon
                  ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex  w-full h-screen text-light-navy-blue bg-white ease-in-out duration-200"
                  : "md:hidden absolute top-[100px] right-0 left-[-100%] flex w-full h-screen text-light-navy-blue bg-white ease-in-out duration-200"
              }
            >
              <div className="w-full">
                <ul className="font-bold text-xl ps-5">
                  <li
                    onClick={handleSmallerScreenNav}
                    className="py-5 hover:text-black cursor-pointer"
                  >
                    <Link href="/">
                      <p> Home</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
