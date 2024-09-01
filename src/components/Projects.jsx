import React from "react";
import img1 from "../assets/pools/Pool1.jpg";
import img2 from "../assets/pools/Pool2.jpg";
import img3 from "../assets/pools/Pool3.jpg";
import img4 from "../assets/pools/Pool4.jpg";

const Projects = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          {/* <h1 className="text-2xl font-semibold font-[Poppins] text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text capitalize lg:text-4xl">
            Our Projects
          </h1> */}
          <h1 className=" text-lg font-bold font-[Poppins]">
            At Bs Constructor, we take pride in transforming visions into
            reality. With a commitment to quality craftsmanship and innovative
            solutions, we have successfully completed a diverse range of
            projects across various sectors. From residential developments to
            commercial spaces, each project is a testament to our dedication to
            excellence and customer satisfaction. Explore our portfolio to see
            how we bring ideas to life with precision and care. <br />
          </h1>
          <p className="text-orange-500 text-lg font-semibold mt-4">
            Here are some of our work :
          </p>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Pool Transformations
            </h1>
           <div>
            
           </div>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
              <span className="inline-block w-20 h-1 ml-1 bg-orange-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
