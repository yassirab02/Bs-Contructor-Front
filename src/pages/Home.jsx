import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Formule from "../components/Formule";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Reviews/>
      <Contact/>
      {/* <Formule /> */}
      <Footer/>
    </>
  );
};

export default Home;
