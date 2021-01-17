import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { ReactSVG } from "react-svg";
import "./App.css";
import Bone from "./assets/fish_bone.svg";
import Bin from "./assets/bin_closed.svg";
const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());

function Card() {
  const binRef = useRef();
  const domTarget = React.useRef(null);
  const [{ x, y }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [drag, setDrag] = React.useState(false);

  useEffect(() => {
    if (binRef.current) {
      console.log(binRef.current.offsetTop)
      
    }
    console.log("123")
  });

  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => set({ x, y }),
      onDragEnd: () => setDrag(false),

      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        set({
          rotateX: calcX(py, y.getValue),
          rotateY: calcY(px, x.getValue),
          scale: 1.1,
        }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <>
      <animated.div
        ref={domTarget}
        className={`${drag ? "dragging" : ""}`}
        style={{ x, y }}
      >
        <ReactSVG src={Bone} />
      </animated.div>
      <ReactSVG src={Bin} ref={binRef} />
    </>
  );
}

ReactDOM.render(<Card />, document.getElementById("root"));
