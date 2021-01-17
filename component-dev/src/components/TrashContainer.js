import { useSpring, animated } from "react-spring";
// import { useDrag } from 'react-use-gesture'
import clamp from "lodash-es/clamp";
import { useGesture } from "react-with-gesture";
import { ReactSVG } from 'react-svg'




const TrashContainer = ({ name, index }) => {
  console.log("TrashContainer!");
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 6, 2);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 100 * velocity, friction: 50 },
    });
  });
  return (
   
    <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
      
    >
  
  <ReactSVG src={name} />
      
    </animated.div>

   
  );
};
export default TrashContainer;
