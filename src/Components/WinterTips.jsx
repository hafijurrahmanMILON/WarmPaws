import React, { use } from "react";
import pawPrint from "../assets/pawprint.png";

const tipsPromise = fetch("/WinterTips.json").then((res) => res.json());

const WinterTips = () => {
  const allTips = use(tipsPromise);

  return (
    <div className="py-16 bg-base-100">
      <div className="text-center mb-10">
        <h1 className="font-bold font-primary text-5xl">
          {" "}
          Winter Wellness for Your Furry{" "}
          <span className="font-primary text-primary">Friends🐾</span>
        </h1>
        <p className="text-sm md:text-base mt-3 font-second">
          Keep your furry friends warm, safe, and happy this winter season.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-10 lg:px-20">
        {allTips.map((tip, index) => (
          <div
            key={tip.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-500 group overflow-hidden"
          >
            <div className="flex justify-center mb-4">
              <img
                src={tip.icon}
                alt={tip.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-lg font-bold font-primary text-primary">
              {tip.title}
            </h3>
            <p className="text-sm mt-2 font-second">{tip.description}</p>
            <img
              src={pawPrint}
              alt="paw"
              className="absolute bottom-4 right-4 w-8 opacity-0  group-hover:opacity-40 transition-opacity duration-700"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
