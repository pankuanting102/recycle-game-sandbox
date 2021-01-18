import React, { createContext, useContext, useState } from "react";

// create a context
const GlobalContext = createContext();

// define the provider
const { Provider } = GlobalContext;

// define global context
const GlobalContextProvider = (props) => {


    // setup state
    const [state, setState] = useState({

        gameStart: false,
        timerSeconds: 60,
        loggedIn: false,
        playerId: 0,
        playerLevel: 1,
        gameOver: false,
        highScore: 0,
        gameScore: 0,

        handleGameStart: () => {
            setState ({
                ...state, gameStart : true
            });
        },

        handleLogin: (event) => {
            event.preventDefault();

            setState({
                ...state,
                loggedIn: true
            })
        },

        handleLogOut: (event) => {
            event.preventDefault();

            setState({
                ...state,
                loggedIn: false
            })
        },

        handleSaveHighScore: () => {

            if (state.highScore > state.gameScore) {

                setState({
                    ...state, highScore: state.gameScore
                })

                // // write to DB
                // API.saveHighScore()
                // .catch(console.log)
            }
            return;
        },

    })

    // put the state in the context Provider

    return <Provider value={state} {...props} />
};

// define consumer
const useGlobalContext = () => {

    return useContext(GlobalContext);
}


// export context
export { GlobalContextProvider, useGlobalContext }