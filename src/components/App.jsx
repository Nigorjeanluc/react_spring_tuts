import React from 'react'
// import UseSpring from './Fun/useSpring'
// import UseTransition from './Fun/useTransition'
// import FunWithColorsAuto from './Fun/FunWithColorsAuto'
// import CarouselBasic from './Carousel/CarouselBasic'

// import img1 from './../assets/img1.jpg'
// import img2 from './../assets/img2.jpg'
// import img3 from './../assets/img3.jpg'
// import img4 from './../assets/img4.jpg'
// import img5 from './../assets/img5.jpg'
// import CarouselBasicImage from './Carousel/CarouselBasicImage'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
// import ContentSection from './ContentSection/ContentSection'
import ContentSection2 from './ContentSection2/ContentSection2'
// import ContentSection3 from './ContentSection3/ContentSection3'

// const SLIDES = [img1, img2, img3, img4, img5]

const App = () => {
  const transition1 = {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' },
  }

  const transition2 = {
    from: { opacity: 0, transform: 'scale(0)', display: 'none' },
    enter: { opacity: 1, transform: 'scale(1)', display: 'block' },
    leave: { opacity: 0, transform: 'scale(0)', display: 'none' },
  }

  const transition3 = {
      from: {
          opacity: 0,
          transform: 'perspective(600px) rotateX(180deg)',
          display: 'none',
      },
      enter: {
          opacity: 1,
          transform: 'perspective(600px) rotateX(0deg)',
          display: 'block',
      },
      leave: {
          opacity: 0,
          transform: 'perspective(600px) rotateX(-180deg)',
          display: 'none',
      },
  };

  const transition4 = {
      from: {
          opacity: 0,
          transform: 'rotate(-180deg)',
          display: 'none',
      },
      enter: {
          opacity: 1,
          transform: 'rotate(0deg)',
          display: 'block',
      },
      leave: {
          opacity: 0,
          transform: 'rotateX(180deg)',
          display: 'none',
      },
  };
  return (
    <div>
      {/* <UseSpring />
      <UseTransition />
      <FunWithColorsAuto />
      <CarouselBasic />
      <CarouselBasicImage slides={SLIDES} /> */}
      <Hero />
      {/* <ContentSection /> */}
      <ContentSection2 transitionStyles={transition1}/>
      <ContentSection2
        transitionStyles={transition2}
        isCarouselReverse={true}
      />
      <ContentSection2 transitionStyles={transition3}/>
      <ContentSection2
        transitionStyles={transition4}
        isCarouselReverse={true}
      />
      {/* <ContentSection3 /> */}
      <Footer />
    </div>
  )
}

export default App