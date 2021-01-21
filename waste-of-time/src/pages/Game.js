import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { ReactSVG } from "react-svg";

import Bone from "../assets/fish_bone.svg"
import Bin from "../assets/bin_closed.svg"

import GameOver from "../components/GameOver"
import TrashMessage from "../components/TrashMessage"

document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());


const Game = () => {

  const binRef = useRef();
  const domTarget = useRef(null);

  // define main game state 
  const [gameState, setGameState] = useState({

    gameStart: false,
    loggedIn: false,
    playerId: 0,
    playerLevel: 1,
    gameOver: false,
    highScore: 0,
    gameScore: 0,

  });

  // useGesture State
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
    }, []

  )

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


  function toggle() {

    setGameState({ ...gameState, gameStart: !gameState.gameStart });

    console.log("hi")

    if (gameState.gameStart) {
      console.log("hiii")
      // handleStartTimer()
    }

  };


  // timer countdown

  // function handleStartTimer() {

  //   var timerRef = setInterval(

  //     () => {

  //       console.log("inside interval")

  //       setTimer(timer => timer - 1)

  //       if (timer <= 0) {

  //         handleGameOver()
  //         clearInterval(timerRef)
  //       }

  //     }, 1000)
  // }

  // const [timer, setTimer] = useState(3)


  

  // function handleGameOver() {

  // console.log("gameover!")


  return (
    <>

      <div>

        {/* {timer} */}

      </div>

      <button className={`button button-primary button-primary-${gameState.gameStart ? true : false}`} onClick={toggle}>
        {gameState.gameStart ? 'Exit' : 'Start'}
      </button>

      {/* trashFact + userMessage(gameOver) */}
      <div>

        {gameState.gameOver ? <GameOver /> : <TrashMessage />}
        {/* currentTrash={curentTrash} */}

      </div>

      <animated.div
        ref={domTarget}
        className={`${drag ? "dragging" : ""}`}
        style={{ x, y }}
      >
        <ReactSVG src={Bone} />

      </animated.div>

      <img alt="bin" src={Bin} ref={binRef} />

    </>
  );
}

export default Game