import React from 'react';
import { useDrag } from 'react-dnd';
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
const style = {
    // border: '1px dashed gray',
    // backgroundColor: 'white',
    // padding: '0.5rem 1rem',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    width: '160px'
};
export const Box = ({ name, type, isDropped }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
  })
    const [{ opacity }, drag] = useDrag({
        item: { name, type },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    });
    return (
    <animated.div ref={drag} >
 
			<img src={name} style={{ ...style}, opacity}/>
    
    </animated.div>
    );
};


