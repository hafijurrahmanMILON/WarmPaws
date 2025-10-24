import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { image, serviceName, rating, price, serviceId,category } = service;
  return (
    <div className="card w-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <figure className="h-72 p-3">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
          <img src={image} className="w-full h-full object-cover" />
        </div>
      </figure>

      <div className="card-body h-48 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="card-title font-primary text-lg text-neutral font-semibold">
            {serviceName}
          </h3>
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
        </div>

        <div className="card-actions">
          <Link
            to={`/serviceDetails/${serviceId}`}
            className="btn btn-primary border-0 hover:bg-gradient-to-br from-amber-400 to-orange-500 text-white w-full rounded-full font-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
