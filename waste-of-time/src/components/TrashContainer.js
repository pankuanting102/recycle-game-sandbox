/* eslint-disable no-unused-vars */
import React, { useState } from "react"


const TrashFact = ({ currentTrash }) => {

    

    const [gameRecycleFacts, setGameRecycleFacts] = useState({
        1: "glass",
        2: "metal",
        3: "paper",
        4: "food waste",
        5: "normal",
        6: "plastic",
      });

      

    return <div>
        {/* <div>trash fact!</div> */}
        <div>try again!</div>
    </div>
}

export default TrashFact;