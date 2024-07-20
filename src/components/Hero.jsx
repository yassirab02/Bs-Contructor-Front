import React from "react";
import backgroundImage from "../assets/bg.jpg";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
import { Heading } from "lucide-react";

const title1 = "Build your";
const title2 = "Dream House";
const text =
  "transform your web content using framer motion and Empower your creativity and bring your VR app ideas to life with ";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const headingChars1 = splitStringUsingRegex(title1);
  const headingChars2 = splitStringUsingRegex(title2);
  const textChars = splitStringUsingRegex(text);

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
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        >
          {headingChars1.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-[Poppins]">
            {" "}
            {headingChars2.map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <p className="mt-10 text-lg text-center text-black max-w-4xl border border-black rounded-lg bg-white/55">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-105"
          >
           Overview
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border border-gray-500 hover:scale-105">
            Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
