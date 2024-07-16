import React from "react";
import backgroundImage from "../assets/bg.jpg";

const Hero = () => {
  return  (
    <>
    <div
      className="flex flex-col items-center lg:pt-20 bg-gray-600 pb-80"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Build your 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Dream House
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-black max-w-4xl border border-black rounded-lg bg-white/55">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
    </div>
    </>
  );
};

export default Hero;