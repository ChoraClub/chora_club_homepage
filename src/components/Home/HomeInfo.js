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
        className="bg-home-info-texture bg-cover p-14"
      >
        <div className="pt-4 pb-12 text-white text-4xl font-medium text-center">
          Making Things Simple & Awesome for you!
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 px-36">
            {blocks.map((details, index) => (
              <div key={index} className="text-center bg-white rounded-2xl px-4 py-7">
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
