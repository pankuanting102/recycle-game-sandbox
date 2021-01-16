/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash-es/clamp';
import { useGesture } from 'react-with-gesture'

// the global store gives the provider and consumer
import { useGlobalContext } from "../utils/GlobalContext";

import GameStats from "../components/GameStats";
import BinsContainer from "../components/BinsContainer";
import TrashContainer from "../components/TrashContainer";
import UserMessageContainer from "../components/UserMessageContainer";
import RecycleFact from "../components/RecycleFact";
import Timer from "../components/Timer"


// if logged in => play  
// if not logged in => to sign up page

function Game() {

    const GlobalState = useGlobalContext();

    // pop up at wrong drop
    const [gameRecycleFacts, setGameRecycleFacts] = useState({
        1: "glass",
        2: "metal",
        3: "paper",
        4: "food waste",
        5: "normal",
        6: "plastic",
    });


    // GAME ASSETS

    // trash
    // trashPosition: math.random the position x , y
    const [trash, setTrash] = useState({
        positionX: 0,
        positionY: 0,
        asset: "",
        trashType: "",
        trashId: "",
    });


    // bin
    const [bin, setBin] = useState({
        asset: "",
        trashType: "",
    });


    useEffect(() => {
        
        // handle gameRest
        // reset the setState
        // call randomize position

    });

    // animateTrashInit

    // animateTrashDrag

    // animateTrashDrop

    const handleAnswer = (event) => {

        if (trash.trashType === bin.trashType) {

            // setGlobalState({ ...GlobalState, gameScore: GlobalState.gameScore + 1 })

        } else {

            const FactId = event.target.value

            alert(gameRecycleFacts.FactId)

        }
    }

    // handle gameOver
    // pop up game summary modal


    return (

        <div className="container">

            <Timer />

            <animated.div className="game-start">

                <button onClick={GlobalState.handleGameStart} className="start-button"> start button</button>

            </animated.div>

            <animated.div className="game-stats">

                <GameStats />

            </animated.div>

            <animated.div className="trash-container">

                <TrashContainer />

            </animated.div>

            <animated.div className="bins-container">

                <BinsContainer />

            </animated.div>

            <animated.div className="user-message-container">

                <UserMessageContainer />

            </animated.div>

            <animated.div className="recycle-fact">

                <RecycleFact />

            </animated.div>


        </div>

    )
}

export default Game