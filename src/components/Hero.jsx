import React from "react";
import backgroundImage from "../assets/bg.jpg";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// const title1 = "Build your";
// const title2 = "Dream House";
// const text =
//   "transform your web content using framer motion and Empower your creativity and bring your VR app ideas to life with ";

const words = ["Build", "Find", "Renovate"];
const words2 = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const Hero = () => {

  // const headingChars1 = splitStringUsingRegex(title1);
  // const headingChars2 = splitStringUsingRegex(title2);

  return (  
    <>
      <div
        className="flex flex-col items-center lg:pt-20 bg-gray-600 pb-80"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          <FlipWords words={words} /> 
          <span className="text-black font-[Poppins]">
            Your Dream House
          </span>
        </h1>

        <div className="mt-10 text-md text-center text-black max-w-4xl border border-orange-700 rounded-lg bg-white/55 pb-2">
          <TextGenerateEffect duration={2} filter={false} words={words2} />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-105"
          >
            Overview
          </a>
          <a
            href="#"
            className="py-3 px-4 mx-3 rounded-md border border-gray-500 hover:scale-105"
          >
            Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
