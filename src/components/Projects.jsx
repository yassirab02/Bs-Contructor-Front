import React from 'react';
import Carousel from "./Carousel";
import img1 from "../assets/pools/Pool1.jpg";
import img2 from "../assets/pools/Pool2.jpg";
import img3 from "../assets/pools/Pool3.jpg";
import img4 from "../assets/pools/Pool4.jpg";
import Title from './Title';


const Projects = () => {
  return (
   <>
   <Title text="Here some of our projects"/>
     <Carousel 
        img1={img1} 
        img2={img2} 
      />
     <Carousel 
        img1={img3} 
        img2={img4} 
      />
   </>
  );
}

export default Projects