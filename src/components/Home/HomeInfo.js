import React from "react";

function HomeInfo() {
  const blocks = [
    { text: "Explore Diverse DAOs & Ecosystems Effortlessly" },
    { text: "Connect with Delegates for Rapid Learning" },
    { text: "Personalized Learning Sessions, One Click Away" },
    { text: "Active DAO participation in Live Office Hours" },
    { text: "Intuitive Design for Seamless Navigation" },
    { text: "Stay Informed with Event Reminders & Email Notifications" },
  ];

  return (
    <div className="py-10 px-5 xs:px-8 sm:py-8 sm:px-12 md:py-10 md:px-14 font-poppins">
      <div
        style={{ borderRadius: "36px" }}
        className="bg-home-info-texture bg-cover p-8 sm:p-12 md:p-10 lg:p-14"
      >
        <div className="font-medium text-center text-white pt-4 pb-8 text-2xl sm:pb-10 sm:text-3xl lg:text-4xl lg:pb-12 ">
          Making Things Simple & Awesome for you!
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 pb-5 xs:gap-7 sm:px-4 md:grid-cols-3 md:pb-0  md:gap-4 md:px-5 2xm:px-14 lg:px-24 xl:px-32">
            {blocks.map((details, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl xs:rounded-2xl text-xs px-2 py-3 xs:px-3 xs:py-5 xs:text-sm lg:px-4 lg:py-7 lg:text-base"
              >
                {details.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfo;
