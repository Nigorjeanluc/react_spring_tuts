import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './CarouselBasic.css';



const CarouselBasicImage = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transitions = useTransition([activeIndex], {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' },
  });

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
        <div className='carousel-container'>
            <div className='carousel-btn'>
                <button onClick={previousSlide}>Previous</button>
            </div>
            <div className='slides'>
                {transitions((styles, index) => (
                    <animated.div
                        style={{
                            ...styles,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${slides[index]})`,
                            backgroundSize: 'cover',
                        }}
                    ></animated.div>
                ))}
            </div>
            <div className='carousel-btn'>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
  );
};

export default CarouselBasicImage;
