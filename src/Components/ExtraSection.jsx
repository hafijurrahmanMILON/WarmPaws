import React from "react";

const ExtraSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-center p-10">
        <h1 className="text-4xl font-semibold  text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:px-64 justify-center items-center">
          <div className="py-8">
            <p className="text-white font-light">Total Downloads</p>
            <h1 className="text-white text-5xl font-bold my-3">750+</h1>
            <p className="text-white font-light">Happy Clients</p>
          </div>
          <div className="py-8">
            <p className="text-white font-light">Total Reviews</p>
            <h1 className="text-white text-5xl font-bold my-3">74+</h1>
            <p className="text-white font-light">Awards</p>
          </div>
          <div className="py-8">
            <p className="text-white font-light">Active Apps</p>
            <h1 className="text-white text-5xl font-bold my-3">850+</h1>
            <p className="text-white font-light">Adopted Pets</p>
          </div>
          <div className="py-8">
            <p className="text-white font-light">Active Apps</p>
            <h1 className="text-white text-5xl font-bold my-3">850+</h1>
            <p className="text-white font-light">Adopted Pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
