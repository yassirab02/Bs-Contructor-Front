import React from "react";
import backgroundImage from "../assets/bg.jpg";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = ["Build", "Find", "Renovate"];
const words2 = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const Hero = () => {
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
        <h1 className="text-6xl mt-8 md:mt-0 sm:text-6xl lg:text-7xl text-center tracking-wide">
          <FlipWords words={words} />
          <span className="text-black font-[Poppins]">
            <br className="block md:hidden" />{" "}
            {/* Show on small screens, hide on medium and larger */}
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
