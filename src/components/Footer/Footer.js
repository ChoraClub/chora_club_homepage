import React from "react";
import footer_logo from "@/assets/footer/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import twitter from "@/assets/footer/twitter.png";
import telegram from "@/assets/footer/telegram.png";
import discord from "@/assets/footer/discord.png";
import mirror from "@/assets/footer/Mirror.png";

function Footer() {
  return (
    <div className="bg-light-navy-blue p-7 font-poppins">
      <div>
        <Link href="/" className="flex justify-center">
          <Image
            src={footer_logo}
            className="w-40 md:w-44"
            alt="logo"
          ></Image>
        </Link>
        <div className="pt-5 xs:pt-7 pb-3">
          <hr />
        </div>

        <div className=" text-white text-center text-xs">
          Copyright © 2024 Chora Club | All rights reserved
        </div>

        <div className="flex justify-center pt-6 gap-x-8 xs:gap-x-9 sm:gap-x-10 pb-4">
          <Link href="https://discord.gg/mFyeq34cGM" target="_blank">
            <Image
              src={discord}
              className="w-9 xs:w-10 cursor-pointer"
              alt="discord"
            ></Image>
          </Link>

          <Link href="https://twitter.com/ChoraClub" target="_blank">
            <Image
              src={twitter}
              className="w-9 xs:w-10 cursor-pointer"
              alt="twitter"
            ></Image>
          </Link>

          <Link href="https://t.me/choraclub" target="_blank">
            <Image
              src={telegram}
              className="w-9 xs:w-10 cursor-pointer"
              alt="telegram"
            ></Image>
          </Link>

          <Link href="https://mirror.xyz/0x30d644CBf785167D8CaBcB35602959E19D9004Db" target="_blank">
            <Image
              src={mirror}
              className="w-9 xs:w-10 cursor-pointer"
              alt="mirror"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
