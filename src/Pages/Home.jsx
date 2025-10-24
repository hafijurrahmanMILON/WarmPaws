import React from "react";
import HeroSlider from "../Components/HeroSlider";
import OurService from "../Components/OurService";
import WinterTips from "../Components/WinterTips";
import Vets from "../Components/Vets";
import ExtraSection from "../Components/ExtraSection";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div className="container md:w-10/12 mx-auto  px-5">
        <div>
          <OurService></OurService>
        </div>
        <div>
          <WinterTips></WinterTips>
        </div>
      </div>
      <ExtraSection></ExtraSection>
      <Vets></Vets>
    </div>
  );
};

export default Home;
