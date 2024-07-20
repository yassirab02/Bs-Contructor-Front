import React from "react";
import Service1 from "../assets/interior/Interior.jpg";
import Service2 from "../assets/pools/Pool.jpg";
import Service3 from "../assets/Construction.jpg";
import Service4 from "../assets/interior/Remodeling.jpg";
import Service5 from "../assets/renovation/Renovation.jpg";
import Service6 from "../assets/management.jpg";

const serviceData = [
  {
    title: "Interior design",
    image: Service1,
  },
  {
    title: "Pool construction",
    image: Service2,
  },
  {
    title: "House construction",
    image: Service3,
  },
  {
    title: "Home remodeling",
    image: Service4,
  },
  {
    title: "House renovation",
    image: Service5,
  },
  {
    title: "Project management",
    image: Service6,
  },
];

const Services = () => {
  return (
    <>
      <div className="mb-6">
        <h1 className="flex justify-center my-6 text-4xl font-bold font-[Poppins] bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center cursor-pointer">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm transform transition-transform duration-300"
            >
              <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md transform transition-transform duration-300  hover:scale-105"
                style={{
                  backgroundImage: `url(${service.image})`, 
                }}
              ></div>

              <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 mx-auto">
                <div className="flex items-center justify-center px-3 py-2 bg-gray-200">
                  <a href="/">
                    <button className="px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-orange-500 to-orange-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                      {service.title}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
