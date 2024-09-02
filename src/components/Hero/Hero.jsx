import React, { useEffect, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

import './Hero.css'

function Hero() {
  const [showHeading, setShowHeading] = useState(false)

  const transistions = useTransition([showHeading], {
    from: { opacity: 0, transform: 'translatey(-50px)' },
    enter: { opacity: 1, transform: 'translatey(0px)' },
    leave: { opacity: 0, transform: 'translatey(-50px)' },
    config: { duration: 2000 },
  })

  useEffect(() => {
    setShowHeading(true)

    // setTimeout(() => {
    //   setShowHeading(false)
    // }, 3000)
  }, [])

  return (
    <div className='hero-container'>
      {
        transistions((styles, item) => {
          return (
          <animated.div style={styles}>
            {
              item && (
                <div>
                  <h1 className='hero-heading'>Welcome to the Carousel</h1>
                  <p className='hero-subheading'>This is a sample landing page with carousels</p>
                </div>
              )
            }
          </animated.div>
        )})
      }
    </div>
  )
}

export default Hero