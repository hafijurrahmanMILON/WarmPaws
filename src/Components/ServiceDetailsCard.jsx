import React from "react";
import toast from "react-hot-toast";

const ServiceDetailsCard = ({ service }) => {
  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  const handleToast = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-2xl md:min-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
      <div className="p-6">
        <img
          src={image}
          alt={serviceName}
          className="w-full max-h-[40vh] object-cover rounded-xl"
        />
      </div>

      <div className="px-6 space-y-2">
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          {category}
        </span>

        <h1 className="text-2xl font-primary font-bold text-neutral">
          {serviceName}
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input type="radio" className="mask mask-star-2 bg-orange-400" />
            </div>
            <span className="font-semibold text-gray-700">{rating}</span>
          </div>
          <span className="text-2xl font-bold text-primary">${price}</span>
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="bg-amber-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-1">Service Provider</h3>
          <p className="text-gray-700">{providerName}</p>
          <p className="text-gray-600 text-sm">{providerEmail}</p>
        </div>

        <div className="text-sm text-gray-600">
          Slots Available: <strong>{slotsAvailable}</strong>
        </div>
      </div>

      <div className="p-6 bg-amber-50 mt-2 border-t border-orange-200">
        <h2 className="text-xl font-primary font-bold text-neutral mb-4 text-center">
          Book This Service
        </h2>

        <form onSubmit={handleToast} className="space-y-2 max-w-md mx-auto">
          <div className="flex gap-3">
            <label className=" py-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input w-full border-none bg-white"
              required
            />
          </div>

          <div className="flex gap-3">
            <label className=" py-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="input w-full border-none bg-white"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white font-primary hover:bg-orange-600 mt-4 py-2"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
