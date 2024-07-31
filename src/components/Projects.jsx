import React from 'react';
import img1 from "../assets/pools/Pool1.jpg";
import img2 from "../assets/pools/Pool2.jpg";
import img3 from "../assets/pools/Pool3.jpg";
import img4 from "../assets/pools/Pool4.jpg";

const Projects = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text capitalize lg:text-4xl">Our Projects</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <a href="/projects/pool-transformation" className="block">
              <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 transform transition-transform duration-300 hover:scale-105" style={{backgroundImage: `url(${img1})`}}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">Best Pool transformation</h2>
                  <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase">Pools</p>
                </div>
              </div>
            </a>

            <a href="/projects/house-renovation" className="block">
              <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 transform transition-transform duration-300 hover:scale-105" style={{backgroundImage: `url(${img2})`}}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">House Renovation</h2>
                  <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase">Houses</p>
                </div>
              </div>
            </a>

            <a href="/projects/our-work" className="block">
              <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 transform transition-transform duration-300 hover:scale-105" style={{backgroundImage: `url(${img3})`}}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">Our work</h2>
                  <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase">Work</p>
                </div>
              </div>
            </a>

            <a href="/projects/huge-collection" className="block">
              <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 transform transition-transform duration-300 hover:scale-105" style={{backgroundImage: `url(${img4})`}}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">Huge collection of transformation</h2>
                  <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase">Transformation</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
