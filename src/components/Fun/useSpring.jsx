import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

function UseSpring() {
  // const spring = useSpring({
  //   from: { opacity: 0, x: 100, y: 100 },
  //   to: { opacity: 1, x: 0, y: 0 },
  //   config: { duration: 1000 }
  // })

  // const [springs, api] = useSpring(() => ({
  //   from: { opacity: 0, x: 0, y: 0 },
  //   to: { opacity: 1, x: 100, y: 100 },
  //   config: { duration: 1000 }
  // }))

  // const [isDown, setIsDown] = useState(false)
  const [currentPositionX, setCurrentPositionX] = useState(0)
  const [currentPositionY, setCurrentPositionY] = useState(0)

  const [springs, api] = useSpring(() => ({
    from: { x: currentPositionX, y: currentPositionY },
    onChange: (ev) => {
      setCurrentPositionX(ev.value.x);
      setCurrentPositionY(ev.value.y);
    },
    config: { duration: 1000 }
  }))

  const handleClick = () => {
    api.start({
      from: { x: currentPositionX, y: currentPositionY },
      to: { x: 300, y:  300 },
      config: { duration: 1000 }
    })
    // setIsDown(!isDown)
  }

  const handleDoubleClick = () => {
    api.start({
      from: { x: currentPositionX, y: currentPositionY },
      to: { x: 0, y: 0 },
      config: { duration: 1000 }
    })
    // setIsDown(true)
  }


  return (
    <div className='play'>
      <h2>useSpring</h2>
      <br />

      <animated.div 
        onClick={handleClick}
        onMouseOver={handleDoubleClick}
        style={{
          ...springs,
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          borderRadius: '50%',
          marginLeft: '5px'
        }}
      />
    </div>
  )
}

export default UseSpring
