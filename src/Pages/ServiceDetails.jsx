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
    <div className="min-h-screen flex items-center justify-center my-3">
      <ServiceDetailsCard service={service}></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetails;
