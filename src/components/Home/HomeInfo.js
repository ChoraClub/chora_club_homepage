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
    <div className="py-10 px-14 font-poppins">
      <div
        style={{ borderRadius: "36px" }}
        className="bg-home-info-texture bg-cover p-14 md:p-10 lg:p-14"
      >
        <div className="pt-4 lg:pb-12 md:pb-10 text-white text-4xl md:text-3xl lg:text-4xl font-medium text-center">
          Making Things Simple & Awesome for you!
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 px-4 md:px-5 2xm:px-14 lg:px-24 xl:px-32">
            {blocks.map((details, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl px-3 py-5 text-sm lg:px-4 lg:py-7 lg:text-base"
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
