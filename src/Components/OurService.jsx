import React, { use } from "react";
import ServiceCard from "./ServiceCard";

const servicePromise = fetch("/services.json").then((res) => res.json());

const OurService = () => {
  const allService = use(servicePromise);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-4 mt-12">
        <h1 className="font-bold font-primary text-5xl">
          {" "}
          <span className="font-primary text-primary">WarmPaws</span> Winter
          Favorites
        </h1>
        <p className="font-semibold">
          Explore our most-loved seasonal services for cozy, happy pets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allService.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default OurService;
