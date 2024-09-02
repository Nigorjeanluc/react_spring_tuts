/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

import './Carousel.css';

import vectorImg from './../../assets/vector2.webp'

const Carousel2 = ({ slides, transitionStyles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((active) => (active + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const transitions = useTransition([activeIndex], transitionStyles);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
        <div className='carousel-container'>
            <div onClick={previousSlide} className='btn prev'>&#10094;</div>
            <div className='slides'>
                {transitions((styles, index) => (
                    <animated.div
                      className='slide'
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
            <div onClick={nextSlide} className='btn next'>&#10095;</div>

            <div className='vector-frame'>
                <img src={vectorImg} alt='style' className='vector' />
            </div>
        </div>
  );
};

export default Carousel2;
