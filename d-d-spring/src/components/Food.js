/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom'
import { DragDropContainer } from "react-drag-drop-container";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import "./Food.css"
/* 
    Food is a draggable element (in a DragDropContainer)
*/
const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20



document.addEventListener('gesturestart', (e) => e.preventDefault())
document.addEventListener('gesturechange', (e) => e.preventDefault())
const Food = (props) => {
  const landedOn = (e) => {
    console.log('I was dropped on ' + e.dropData.name)
    console.log({ 'onDrop event passed back to Food': e });
  }
  const domTarget = React.useRef(null)
  const [{ x, y }, set] = useSpring(() => ({
 
    
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  
  const [drag, setDrag] = React.useState(false)

  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => set({ x, y, }),
      onDragEnd: () => setDrag(false),
     
      onMove: ({ xy: [px, py], dragging }) => !dragging && set({ rotateX: calcX(py, y.get()), rotateY: calcY(px, x.get()), scale: 1.1 }),

      
    },
    { domTarget, eventOptions: { passive: false } }
  )

  return (
    <animated.div
      ref={domTarget}
      className={`${drag ? 'dragging' : ''}`}
      style={{  x, y}}
    >
   <DragDropContainer
   className='dnd'
      targetKey={props.targetKey}
      dragClone={props.dragClone || false}
      dragData={{ label: props.label, tastes: props.tastes }}
      customDragElement={props.customDragElement}
      onDrop={landedOn}
      render={() => {
        return <img src={props.image} alt="name" height="45" style={{ marginLeft: 40 }} />
      }}
    />
    </animated.div>
  )


}
export default Food;