import React from "react";
import pawIcon from "../assets/pets.png";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-20 h-20 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>

          
          <div className="absolute inset-0 flex items-center justify-center">
     
            <div className="w-8 h-8 text-amber-500">
              <img src={pawIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-primary text-xl font-semibold text-primary">
            Warming Paws...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
