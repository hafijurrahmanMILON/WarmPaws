import React from "react";
import HeroSlider from "../Components/HeroSlider";
import OurService from "../Components/OurService";
import WinterTips from "../Components/WinterTips";
import Vets from "../Components/Vets";
import ExtraSection from "../Components/ExtraSection";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSlider></HeroSlider>
      </div>
      <div className="container md:w-11/12 mx-auto  px-3 md:px-0 mt-20">
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
