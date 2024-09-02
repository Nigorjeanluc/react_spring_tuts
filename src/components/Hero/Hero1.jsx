import React, { useEffect, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

import './Hero.css'

const DATA = ['heading', 'subheading']

function Hero() {
  const [heading, setHeading] = useState([])

  const transistions = useTransition(heading, {
    from: { opacity: 0, transform: 'translatey(-50px)' },
    enter: { opacity: 1, transform: 'translatey(0px)' },
    leave: { opacity: 0, transform: 'translatey(-50px)' },
    config: { duration: 800 },
  })

  useEffect(() => {
    setHeading(DATA)
  }, [])

  return (
    <div className='hero-container'>
      {
        transistions((styles, item) => {
          return (
          <animated.div style={styles}>
            {item}
          </animated.div>
        )})
      }
    </div>
  )
}

export default Hero