import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ServiceDetailsCard from "../Components/ServiceDetailsCard";

const ServiceDetails = () => {
  const { id } = useParams();
  const allService = useLoaderData();
  const [service, setService] = useState({});
  console.log(id, allService);
  console.log(service);

  useEffect(() => {
    const detailedService = allService.find(
      (singleService) => singleService.serviceId == id
    );
    setService(detailedService);
  }, [id, allService]);

  return (
    <div className="flex items-center justify-center my-8 min-h-screen overflow-hidden">
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetails;
