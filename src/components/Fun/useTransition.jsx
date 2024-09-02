import { useState } from 'react'
import React from 'react'
import { useTransition, animated } from '@react-spring/web'

import './useTransition.css'

const DATA = [1, 2, 3]
const COLORS = ['ORANGE', 'PINK', 'PURPLE']

function UseTransition() {
  const [colors, setColors] = useState(COLORS)

  const transitions = useTransition(DATA, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 }
  })

  const transitions2 = useTransition(colors, {
    from: { opacity: 0, transform:'perspective(600px) rotateX(180deg)' },
    enter: { opacity: 1, transform:'perspective(600px) rotateX(0deg)' },
    leave: { opacity: 0, transform:'perspective(600px) rotateX(180deg)' },
    config: { duration: 1500 }
  })

  const handleMouseLeave = () => {
    setColors([])
  }

  const handleMouseEnter = () => {
    setColors(COLORS)
  }

  return (
    <div className='play'>
      <h1>UseTransition</h1>
      <br />

      {
        transitions((styles, item) => (
          <animated.div style={{
            ...styles,
            fontSize: 50,
            backgroundColor: 'black',
            color: 'white',
            marginBottom: 10
          }}>
            {item}
          </animated.div>
        ))
      }
      <h1>Fun With Colors</h1>
      <br />

      <div
        className='color-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      {
        transitions2((styles, item) => (
          <animated.div 
            className={`color ${item}`}
            style={{
              ...styles,
              marginBottom: 10
            }}
          >
            {item}
          </animated.div>
        ))
      }
      </div>
    </div>
  )
}

export default UseTransition