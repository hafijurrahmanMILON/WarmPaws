import React, { useState, useEffect } from "react";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const categories = ["All", ...new Set(services.map((item) => item.category))];

  const filtered =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="text-center space-y-4 mt-12">
        <h1 className="font-bold font-primary text-5xl">
          <span className="font-primary text-primary">WarmPaws</span> Winter Services
        </h1>
        <p className="font-semibold">
          Explore our most-loved seasonal services for cozy, happy pets.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8 p-4 bg-amber-50 rounded-xl">
        
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <label className="font-semibold text-gray-700">Filter by Category:</label>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-semibold text-gray-700">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered bg-white focus:border-primary"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sorted.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No services found in this category.</p>
          <button
            onClick={() => setSelectedCategory("All")}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Show All Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
