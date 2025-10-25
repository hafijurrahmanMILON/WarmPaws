import React from "react";
import happyClients from "../assets/customer-review.png";
import award from "../assets/trophy.png";
import adopt from "../assets/adopt.png";
import professional from "../assets/medical.png";

const ExtraSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-center p-10">
        <h1 className="text-4xl font-semibold text-white">
          Trusted by Worldwide Pet Lovers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:px-64 justify-center items-center">
          <div className="py-8 flex justify-center items-center flex-col">
            <img src={happyClients} alt="" className="w-16" />
            <h1 className="text-white text-5xl font-bold my-3">750+</h1>
            <p className="text-white font-semibold">Happy Clients</p>
          </div>
          <div className="py-8 flex flex-col justify-center items-center">
            <img src={award} alt="" className="w-16" />
            <h1 className="text-white text-5xl font-bold my-3">74+</h1>
            <p className="text-white font-semibold">Awards</p>
          </div>
          <div className="py-8 flex flex-col justify-center items-center">
            <img src={adopt} alt="" className="w-16" />
            <h1 className="text-white text-5xl font-bold my-3">850+</h1>
            <p className="text-white font-semibold">Adopted Pets</p>
          </div>
          <div className="py-8 flex flex-col justify-center items-center">
            <img src={professional} alt="" className="w-16" />
            <h1 className="text-white text-5xl font-bold my-3">20+</h1>
            <p className="text-white font-semibold">Professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
