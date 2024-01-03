import React from "react";
import Faqs from "@/components/Home/Faqs";
import HomeHero from "@/components/Home/HomeHero";
import HomeInfo from "@/components/Home/HomeInfo";
import HowItWorks from "@/components/Home/HowItWorks";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <HomeInfo />
      <HowItWorks />
      <Faqs />
    </div>
  );
}

export default HomePage;
