// import React from 'react'
// import ReactDOM from 'react-dom'
// import { useSpring, animated,} from 'react-spring'
// import { useGesture } from 'react-use-gesture'

// import './styles.css'

// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20



// document.addEventListener('gesturestart', (e) => e.preventDefault())
// document.addEventListener('gesturechange', (e) => e.preventDefault())

// function Card() {
//   const domTarget = React.useRef(null)
//   const [{ x, y }, set] = useSpring(() => ({
 
    
//     x: 0,
//     y: 0,
//     config: { mass: 5, tension: 350, friction: 40 }
//   }))

  
//   const [drag, setDrag] = React.useState(false)

//   useGesture(
//     {
//       onDragStart: () => setDrag(true),
//       onDrag: ({ offset: [x, y] }) => set({ x, y, }),
//       onDragEnd: () => setDrag(false),
     
//       onMove: ({ xy: [px, py], dragging }) => !dragging && set({ rotateX: calcX(py, y.get()), rotateY: calcY(px, x.get()), scale: 1.1 }),

      
//     },
//     { domTarget, eventOptions: { passive: false } }
//   )

//   return (
//     <animated.div
//       ref={domTarget}
//       className={`${drag ? 'dragging' : ''}`}
//       style={{  x, y}}
//     >
   
//     </animated.div>
//   )
// }

// ReactDOM.render(<Card />, document.getElementById('root'))