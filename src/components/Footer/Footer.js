import React from "react";
import footer_logo from "@/assets/footer/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import twitter from "@/assets/footer/twitter.png";
import telegram from "@/assets/footer/telegram.png";
import discord from "@/assets/footer/discord.png";

function Footer() {
  return (
    <div className="bg-light-navy-blue p-7 font-poppins">
      <div>
        <Link href="/" className="flex justify-center">
          <Image src={footer_logo} width={180}></Image>
        </Link>
        <div className="pt-7 pb-3">
          <hr />
        </div>

        <div className="flex text-white justify-center text-xs">
          Copyright © 2023 Chora Club I All rights reserved
        </div>

        <div className="flex justify-center pt-6 gap-x-8 pb-4">
          <Image src={discord} width={40} className="cursor-pointer"></Image>
          <Image src={twitter} width={40} className="cursor-pointer"></Image>
          <Image src={telegram} width={40} className="cursor-pointer"></Image>
        </div>
      </div>
    </div>
  );
}

export default Footer;
