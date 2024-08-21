import React, { useState } from "react";
import logo from "../assets/Bs-logo.jpg";

const About = () => {
  const [content, setContent] = useState({
    title: "What is BS Constructor",
    text: `“ BS Constructor is a Moroccan construction company established
            in 2013, specializing in the execution of major building and
            public works projects. They are involved in various sectors
            including real estate, industrial, and infrastructure
            development. The company is known for its commitment to quality,
            innovation, and sustainability, offering a wide range of
            services from project conception to completion. <br /> The company's
            portfolio includes a diverse array of projects such as
            residential complexes, commercial buildings, industrial
            facilities, and public infrastructure. BS Constructor aims to
            contribute to the development and modernization of Morocco's
            infrastructure, enhancing the living and working environments of
            its communities. ”`
  });

  const handleToggle = () => {
    setContent((prevContent) => {
      if (prevContent.title === "What is BS Constructor") {
        return {
          title: "Our Mission",
          text: `BS Constructor emphasizes the importance of meeting client needs and expectations by providing tailored solutions, efficient project management, and adherence to international standards.<br /><br /> our team of experienced professionals works collaboratively to ensure that each project is delivered on time, within budget, and to the highest standards of safety and quality.<br /><br /> Our mission is to deliver high-quality construction services
                  that exceed client expectations and contribute to the
                  sustainable development of Morocco.<br /> We are committed to
                  innovation, efficiency, and environmental stewardship in all
                  our projects.`,
        };
      } else {
        return {
          title: "What is BS Constructor",
          text: `“ BS Constructor is a Moroccan construction company established
                  in 2013, specializing in the execution of major building and
                  public works projects. They are involved in various sectors
                  including real estate, industrial, and infrastructure
                  development. The company is known for its commitment to quality,
                  innovation, and sustainability, offering a wide range of
                  services from project conception to completion. <br /> The company's
                  portfolio includes a diverse array of projects such as
                  residential complexes, commercial buildings, industrial
                  facilities, and public infrastructure. BS Constructor aims to
                  contribute to the development and modernization of Morocco's
                  infrastructure, enhancing the living and working environments of
                  its communities. ”`
        };
      }
    });
  };

  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={logo}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-orange-500 ">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96">
                {content.title}
              </h1>

              <p className="max-w-lg mt-6 text-gray-600 " dangerouslySetInnerHTML={{ __html: content.text }} />

              <h3 className="mt-6 text-lg font-medium text-orange-500">
                Soufiane Berrada
              </h3>
              <p className="text-gray-600 ">Ceo and Owner</p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  onClick={handleToggle}
                  title="left arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleToggle}
                  title="right arrow"
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
