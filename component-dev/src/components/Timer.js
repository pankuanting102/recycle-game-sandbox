import { useState, useEffect } from "react"
import { useGlobalContext } from "../utils/GlobalContext"


const Timer = () => {

    const [seconds, setSeconds] = useState(10);
    const state = useGlobalContext();

    useEffect(() => {

        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds -1 ), 1000)
        } else {
            setSeconds("Game Over!");
        }

    },[seconds])

    return (
        <div style={{ opacity: state.gameStart ? 1 : 0 }} >{seconds}</div>
    )

};

export default Timer;
