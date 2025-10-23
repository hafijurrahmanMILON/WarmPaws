import React from "react";
import HeroSlider from "../Components/HeroSlider";
import ServiceCard from "../Components/ServiceCard";
import OurService from "../Components/OurService";
import WinterTips from "../Components/WinterTips";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div className="container mx-auto  px-5">
        <div>
          <OurService></OurService>
        </div>
        <div>
          <WinterTips></WinterTips>
        </div>
      </div>
    </div>
  );
};

export default Home;
