import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import logo from "@/assets/navbar/navbar-logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <header className="font-poppins">
      {/* <ConnectButton className="connectbutton" /> */}
      <div className="m-3 h-16 bg-black sticky top-0 rounded-full">
        <div className="px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="ps-10">
              <Image src={logo} alt="Logo" width={180}></Image>
            </Link>
            <ul className="flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>

              <li>Connect Button</li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
