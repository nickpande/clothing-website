import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://as2.ftcdn.net/v2/jpg/02/19/62/31/1000_F_219623139_BX4tp0X9UALfbE92ZsTtz5ZmLYGUcyae.jpg',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/07/28/18/77/240_F_728187702_cC06RsPDJNvGKQppUcj2G6O9jlG7taPs.jpg',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/18/24/18/240_F_718241833_s8eYw32e83cSwQsnyYzwaAbvM0Jy0ZoU.jpg'},

    {
      url: 'https://t3.ftcdn.net/jpg/01/99/21/04/240_F_199210451_LufbYWoT5vhFmOVDZIjxCCqDTQSYEkiQ.jpg',
    },
    {
      url: 'https://as1.ftcdn.net/v2/jpg/03/21/05/48/1000_F_321054805_QfhGcWBjsLKSrC0qhVqyHGdlL60dMSAd.jpg',
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
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;