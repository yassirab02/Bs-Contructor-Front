import React from "react";
import Contact from "./components/Contact";
import Formule from "./components/Formule";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Workflow/>
      <Reviews/>  
      <Contact />
      <Formule />
      <Footer/>
    </>
  );
}

export default App;
