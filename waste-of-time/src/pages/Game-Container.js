// import packages
import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
// import ReactDOM from "react-dom";

// game asset
import Bone from "../assets/fish_bone.svg"
import Bin from "../assets/bin_closed.svg"

import "./Game-Container.css"

document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());

let GameStyles = {
    marginTop: { marginTop: "20px" },
    floatLeft: { float: "left" },
    height: { height: "120px" },
    block: { display: "block" },
  };

// app 
const Game = () => {

    const binRef = useRef();
    const domTarget = useRef(null);

    const [{ x, y }, setXy] = useSpring(() => ({
        x: 0,
        y: 0,
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const [dropRect, setDropRect] = useState({})

    const [drag, setDrag] = useState(false);

    useEffect(

        () => {

            document.onreadystatechange = () => {

                if (binRef.current) {

                    setDropRect(binRef.current.getBoundingClientRect())
                }
            }
        }, [])

    useGesture(
        {
            onDragStart: () => setDrag(true),
            onDrag: ({ offset: [x, y], xy: [ClientX, ClientY] }) => {

                setXy({ x, y })

                // check drop zone
                if (dropRect.width) {


                    if ((ClientY >= dropRect.top && ClientY <= dropRect.bottom && ClientX >= dropRect.left && ClientX <= dropRect.right)) {
                        console.log("dropped!")

                        // setDropState 

                        // if correct ()

                    }
                }
            },

            onDragEnd: () => setDrag(false),
        },
        { domTarget, eventOptions: { passive: false } }
    );

    return (
        <>
            <animated.div
                ref={domTarget}
                className={`${drag ? "dragging" : ""}`}
                style={{...GameStyles, x, y }}
                id = {"animatedFish"}
            >
                <img src={Bone} alt="fish" />

            </animated.div>
            
            <img alt="bin" src={Bin} ref={binRef} />
        </>
    );
};

export default Game
