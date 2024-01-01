import React from "react";
import illustration from "@/assets/home/illustration.png";
import Image from "next/image";
import connect from "@/assets/home/connect.png";
import future from "@/assets/home/future.png";

function HowItWorks() {
  const backgrounds = [
    "bg-home-working-texture",
    "bg-home-working-texture2",
    "bg-home-working-texture3",
  ];

  const content = [
    {
      title: "Discover DAOs",
      text: "Dive into the vast universe of Web3 ecosystems! Explore and uncover the hidden treasures of diverse DAOs. It's not just discovery; it's a journey into the heart of decentralized possibilities.",
    },
    {
      title: "Fast-track Learning with Delegate Dialogues",
      text: "Skip the learning curve! Book lively sessions with our seasoned Delegates. Get ready for a knowledge boost tailored to your interests. Because why settle for ordinary when you can learn from the extraordinary.",
    },
    {
      title: "Become an Active Participant",
      text: "Be more than a spectator—be an active player! Attend Delegate Office Hours regularly. It's not just about showing up; it's about actively participating, asking questions, engaging with industry leaders and becoming an integral part of the ecosystem.",
    },
  ];

  const container = [
    {
      image: connect,
      title: "Eager to Connect in Web3?",
      text: "Chora Club is your gateway to tailored learning, community engagement, and endless opportunities",
      buttonText: "Start Your Journey",
    },

    {
      image: future,
      title: "Ready to Shape the Future of Web3?",
      text: "Your expertise matters in guiding the next wave of web3 enthusiasts",
      buttonText: "Join as a Delegate",
    },
  ];

  return (
    <div>
      <div className="px-14 py-6 relative">
        <div className="">
          <div className="text-4xl md:text-3xl lg:text-4xl py-5 md:py-10 lg:py-14 font-quanty">
            How Chora Club Works
          </div>
          <div className="absolute right-0 top-0">
            <Image
              src={illustration}
              alt="image"
              priority={true}
              className="w-96 md:w-72 lg:w-96"
              quality={100}
              // sizes="(min-width: 1040px) 384px, (min-width: 780px) 288px, (min-width: 420px) 384px, calc(84vw + 48px)"
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 pe-16 md:pe-5 lg:pe-16 font-poppins">
          {content.map((data, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0px 0px 23.8px 0px rgba(0, 0, 0, 0.11)",
              }}
              className={`${backgrounds[index]} bg-cover border-light-navy-blue border p-10 md:p-3 2xm:p-5 lg:p-8 xl:p-10 rounded-3xl`}
            >
              <div className="text-light-navy-blue font-bold text-xl md:text-base lg:text-lg xl:text-xl md:h-16 lg:h-[4.8rem] min-[1095px]:h-16">
                {data.title}
              </div>

              <div className="pt-2 text-sm">{data.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-16 py-10">
        <div className="grid grid-cols-2 gap-8 font-poppins">
          {/* Containers mapping*/}

          {container.map((data, index) => (
            <div key={index} className="">
              <div className="h-72 md:h-[14.5rem] 2xm:h-[17rem] lg:h-72">
                <div className="flex justify-center">
                  <Image
                    src={data.image}
                    alt="image"
                    className="w-[24rem] hover:scale-105 transition-scale duration-700 ease-in-out"
                    priority={true}
                    quality={100}
                    // sizes="(min-width: 980px) 384px, calc(47.58vw - 73px)"
                  ></Image>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-xl 2xm:text-2xl lg:text-3xl font-semibold text-light-navy-blue py-3">
                  {data.title}
                </div>
                <div className="text-sm pb-5 w-5/6 mx-auto">{data.text}</div>
                <div>
                  <button className="p-4 border-black border-2 text-sm font-semibold rounded-full hover:bg-black hover:text-white">
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
