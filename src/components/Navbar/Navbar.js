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
        <div className="px-4 py-5">
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              className="pl-2 xs:pl-4 sm:pl-6 md:pl-8"
              onClick={handleSmallerScreenNav}>
              <Image src={logo} alt="logo" className="w-36 md:w-44"></Image>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
