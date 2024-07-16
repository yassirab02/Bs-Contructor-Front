import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import kech from '../assets/user1.jpg';
import tanger from '../assets/user1.jpg';
import azzemour from '../assets/user1.jpg';
import taghazout from '../assets/user1.jpg';
import rabat from '../assets/user1.jpg';


function Carousel() {
  const slides = [
    {
      url: kech,
    },
    {
      url: tanger,
    },
    {
      url: azzemour,
    },
    {
      url: taghazout,
    },
    {
      url: rabat,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
    <div className='max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Carousel;
