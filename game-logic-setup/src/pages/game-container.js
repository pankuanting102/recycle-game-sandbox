/* eslint-disable no-unused-vars */
import React, { useState } from "react";



function Game() {

    // game initial state

    // GAME START
    const [gameStart, setGameStart] = useState(false);
    const [gameTimer, setGameTimer] = useState(60);
    const [gameScore, setGameScore] = useState(0);

    // from db
    const [gamePlayerName, setGamePlayerName] = useState("");

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
        positionX: 0,
        positionY: 0,
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

    /////////////////////

    // HANDLE FUNCTIONS

    // handle gameStart
    // call timerCountDown ()
    // game reset()

    // handle gameRest
    // reset the setState
    // call randomize position

    // handle score function

    // handle timerCountDown function (setTimeout)
    // when = 0
    // call gameOver

    // trashRandomPosition

    // animateTrashInit

    // animateTrashDrag

    // animateTrashDrop

    // handleDropCorrect
    // when trash is dropped
    // handleScore

    // handleDropWrong
    // when trash is dropped
    // call fact message pop up

    // handle gameOver
    // pop up game summary modal



    return (

        <div>

            {/* start button trigger */}
            <button start onClick={() => setGameStart({ ...gameStart, start: true })} className="start-button"> start button</button>

        </div>
    )
}

export default Game