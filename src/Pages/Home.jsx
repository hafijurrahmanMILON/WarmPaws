import React from "react";
import HeroSlider from "../Components/HeroSlider";
import ServiceCard from "../Components/ServiceCard";
import OurService from "../Components/OurService";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div>
        <OurService></OurService>
      </div>
    </div>
  );
};

export default Home;
