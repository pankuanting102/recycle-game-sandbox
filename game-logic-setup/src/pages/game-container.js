/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import clamp from 'lodash-es/clamp';
import { useGesture } from 'react-with-gesture'



import GameStats from "../components/GameStats";
import BinsContainer from "../components/BinsContainer";
import TrashContainer from "../components/RecycleFact";
import UserMessageContainer from "../components/UserMessageContainer";
import RecycleFact from "../components/RecycleFact";


// if logged in => play  
// if not logged in => to sign up page

function Game() {

    // game initial state

    // GAME START
    const [gameStart, setGameStart] = useState(false);
    const [gameTimer, setGameTimer] = useState(60);

    // const [gameStart, setGameStart] = useState({
    //     start: false,
    //     timer: 60,
    //     score: 0,  
    // });

    // from db user authentication id
    const [gamePlayerName, setGamePlayerName] = useState("");
    const [gameScore, setGameScore] = useState(0);


    // pop up at wrong drop
    const [gameRecycleFacts, setGameRecycleFacts] = useState("");


    // GAME ASSETS

    // trash
    // trashPosition: math.random the position x , y
    const [trash, setTrash] = useState({
        positionX: 0,
        positionY: 0,
        asset: "",
        trashType: "",
    });


    // bin
    const [bin, setBin] = useState({
        asset: "",
        trashType: "",
    });



    // ANIMATE + MOVE HOOKS

    // drag:


    // drop:


    // GAME END
    const [gameEnd, setGameEnd] = useState(false);
    const [gameEndSummary, setGameEndSummary] = useState("");
    const [newHighScore, setNewHighScore] = useState(false);

    // if (newHighScore) {
    //     get score
    //     write to database
    // }

    /////////////////////

    // HANDLE FUNCTIONS

    // handle gameStart

    useEffect(() => {

        if (gameStart) {

            console.log("start");

            // call timerCountDown ()
            // game reset()

        }

        






    });




    // handle gameRest
    // reset the setState
    // call randomize position

    // handle score function

    // handle timerCountDown function (setTimeout)
    // when = 0
    // call gameOver

    // trashRandomPosition
    // math.random position
    // assign to new state 

    // animateTrashInit

    // animateTrashDrag

    // animateTrashDrop

    // handleDropCorrect
    // when trash is dropped
    // destroy 
    // handleScore +1

    // handleDropWrong
    // when trash is dropped
    // call fact message pop up

    // handle gameOver
    // pop up game summary modal



    return (

        <div className="container">

            <animated.div className="game-start">

                <button onClick={() => setGameStart(true)} className="start-button"> start button</button>

            </animated.div>

            <animated.div className="game-stats">

                <GameStats />

            </animated.div>

            <animated.div className="trash-container">

                <TrashContainer/>

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