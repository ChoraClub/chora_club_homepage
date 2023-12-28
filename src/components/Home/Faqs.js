"use client";

import React, { useState } from "react";
import arrow from "@/assets/home/arrow1.png";
import Image from "next/image";

function Faqs() {

  const faqsData = [
    {
      title: "What is Chora Club?",
      desc: "Chora Club is a platform designed to facilitate the swift integration of new users into the Web3 ecosystem. It connects users with experienced Delegates, offers personalized learning sessions, and provides a space to explore and engage with DAOs.",
    },
    {
      title: "How can I join Chora Club as a user?",
      desc: "Joining Chora Club as a user is easy! Simply click on the 'Join Chora Club' button on our homepage, follow the registration process, and start your Web3 journey.",
    },
    {
      title: "What benefits do users get from Chora Club?",
      desc: "Chora Club users enjoy personalized learning sessions with Delegates, access to a diverse range of DAOs, and the opportunity to actively participate in live office hours. It's a community-driven platform that empowers users in their Web3 exploration.",
    },
    {
      title: "What is the role of Delegates in Chora Club?",
      desc: "Delegates are active participants who contribute their time and expertise to guide and educate new users in the Web3 ecosystem. They host office hours, engage with new users, and play a crucial role in fostering connections within the community.",
    },
    {
      title: "How can I become a Delegate on Chora Club?",
      desc: "If you are passionate about Web3 and want to share your knowledge, becoming a Delegate is easy. Click on the 'Become a Delegate' link, follow the application process, and start making a positive impact in the Web3 community.",
    },
    {
      title: "What awaits me as a Delegate on Chora Club?",
      desc: "Becoming a Delegate at Chora Club opens doors to exciting possibilities. Gain on-chain recognition for your educational contributions, host Delegate Office Hours, and connect with a diverse community of users. Your expertise is not only valued but also actively contributes to the expansion of the Web3 ecosystem.",
    },
    {
      title: "Is there a cost to join Chora Club?",
      desc: "Joining Chora Club is completely free - and will always remain so. We've crafted this platform as a public good, ensuring accessibility for everyone interested in Web3 exploration. Our commitment is to provide a welcoming space where knowledge-sharing and collaboration thrive.",
    },
  ];

  const [expandedStates, setExpandedStates] = useState(
    Array.from({ length: faqsData.length }, () => false)
  );

  const toggleAccordion = (index) => {
    // console.log("Expanded states: ", expandedStates);
    
    const newExpandedStates = expandedStates.map((state, i) =>
      i === index ? !state : false
    );
    // console.log("New Expanded state: ", newExpandedStates);
    
    setExpandedStates(newExpandedStates);
  };

  return (
    <div className="py-10">
      <div className="font-quanty text-center text-light-navy-blue text-4xl">
        FAQs
      </div>

      <div className="px-24 font-poppins py-5">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            style={{ boxShadow: "0px 4px 33.7px 0px rgba(0, 0, 0, 0.07);" }}
            className="flex flex-col rounded-xl px-6 py-4 my-5 cursor-pointer"
          >
            <div className="flex flex-row items-center">
              <p
                className={`flex-auto text-lg tracking-wide ${
                  expandedStates[index] ? "text-light-navy-blue" : "font-normal"
                }`}
              >
                {faq.title}
              </p>
              <div className="border-2 border-light-navy-blue rounded-full p-2">
                <Image className={`flex-none w-3 ${expandedStates[index] ? "-rotate-180 transition-rotate duration-500 ease-in-out" : "transition-rotate duration-500 ease-in-out"}`} src={arrow} alt="arrow down" />
              </div>
            </div>
            <div
              className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
                expandedStates[index] ? "max-h-20" : "max-h-0"
              }`}
            >
              <p className="py-3 text-sm w-11/12 tracking-wide">{faq.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
