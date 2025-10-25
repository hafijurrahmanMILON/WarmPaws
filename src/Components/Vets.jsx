import React from "react";
import vet1 from "../assets/vetImage1.jpg";
import vet2 from "../assets/vet2.jpg";
import vet3 from "../assets/vet3.jpg";
const Vets = () => {
  return (
    <div className=" py-24">
      <h1 className="text-center font-bold font-primary text-3xl md:text-5xl">
        Meet Our Expert <span className="text-primary font-primary">Vets</span>
      </h1>
      <div className=" flex flex-col md:flex-row gap-10 md:gap-18 lg:gap-38 justify-center items-center  mt-10">
        <div>
          <div
            className="flex flex-col justify-center items-center text-center relative "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={vet1}
              alt=""
              className="rounded-full border-2 border-amber-500 w-60"
            />

            <h1 className="font-bold text-lg font-primary text-primary mt-4">
              Dr. Sarah Johnson
            </h1>
            <p>Feline Immunity & Winter Wellness</p>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-center text-center relative "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={vet2}
              alt=""
              className="rounded-full border-2 border-amber-500 w-60"
            />

            <h1 className="font-bold text-lg font-primary text-primary mt-4">
              Dr. Michael Chen
            </h1>
            <p>Winter Pet Care Specialist</p>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col justify-center text-center relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={vet3}
              alt=""
              className="rounded-full border-2 border-amber-500 w-60 h-60"
            />

            <h1 className="font-bold text-lg font-primary text-primary mt-4">
              Dr. Jennifer Smith
            </h1>
            <p>Winter Grooming Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vets;
