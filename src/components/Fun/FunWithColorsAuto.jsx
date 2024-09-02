import React, { useEffect, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

const COLORS = ['ORANGE', 'PINK', 'PURPLE', 'RED', 'GREEN']


/**
 * 
 * 500ms -> Transitions in
 * 500ms -> Just stays there
 * 500ms -> Transitions out
 * 500ms -> It shows nothing
 */

function FunWithColorsAuto() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [colors, setColors] = useState(COLORS)
  const transitions2 = useTransition(colors, {
    from: { opacity: 0, transform:'perspective(600px) rotateX(180deg)' },
    enter: { opacity: 1, transform:'perspective(600px) rotateX(0deg)' },
    leave: { opacity: 0, transform:'perspective(600px) rotateX(180deg)' },
    config: { duration: 500 }
  })


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % COLORS.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setColors(COLORS[activeIndex])

    setTimeout(() => {
      setColors([])
    }, 1000)
  }, [activeIndex])

  return (
    <div className='play'>
      <h1>Fun With Colors</h1>
      <br />

      <div
        className='color-container'
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

export default FunWithColorsAuto