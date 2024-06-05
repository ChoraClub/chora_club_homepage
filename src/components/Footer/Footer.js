import React from "react";
import footer_logo from "@/assets/footer/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import twitter from "@/assets/footer/twitter.png";
import telegram from "@/assets/footer/telegram.png";
import discord from "@/assets/footer/discord.png";
import mirror from "@/assets/footer/Mirror.png";
import Newsletter from "../Newsletter/Newsletter";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-light-navy-blue p-7 font-poppins">
      <Newsletter />
      <div>
        <div className="pt-2 sm:pt-4">
          <hr />
        </div>

        <div className="flex flex-col items-center justify-between py-3 gap-4 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="">
            <Image src={footer_logo} className="w-40 md:w-35" alt="logo" />
          </Link>

          {/* Copyright */}
          <div className="text-white text-[12px] text-center sm:text-left">
            Copyright © {currentYear} Chora Club | All rights reserved
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-0">
            <Link
              href="https://discord.gg/mFyeq34cGM"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={discord}
                className="w-8 sm:w-10 cursor-pointer"
                alt="discord"
              />
            </Link>
            <Link
              href="https://twitter.com/ChoraClub"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={twitter}
                className="w-8 sm:w-10 cursor-pointer"
                alt="twitter"
              />
            </Link>
            <Link
              href="https://t.me/choraclub"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={telegram}
                className="w-8 sm:w-10 cursor-pointer"
                alt="telegram"
              />
            </Link>
            <Link
              href="https://mirror.xyz/0x30d644CBf785167D8CaBcB35602959E19D9004Db"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={mirror}
                className="w-8 sm:w-10 cursor-pointer"
                alt="mirror"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
