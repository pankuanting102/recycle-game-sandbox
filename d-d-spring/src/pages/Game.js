import React from "react";
// import { DragDropContainer, DropTarget } from "react-drag-drop-container"
import Animal from "../components/Animal.js"
import Food from "../components/Food.js"

const Game = () => {
  // we will use this as a custom drag element
  const customElem = () => { <button style={{ marginTop: 20, marginLeft: 20 }}>Bananas!!</button> }
  

  return (
    <div className='drag_food_to_animals'>
      <h2>Demo: Drag the food from the scrolling box to the correct animal</h2>
      <div className="foods" >
          <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="orange" tastes="Delicious" image="img/orange.png"/>
          <Food customDragElement={customElem} targetKey="dogFood" label="pickle" tastes="It tasted weird" image="img/pickle.png" />
        <Food customDragElement={customElem} dragElemOpacity={0.4} targetKey="dogFood" label="cheeseburger" tastes="Yummy" image="img/surprise.png" />
        <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="bananas" tastes="Yummy" image="img/banana.png" />
      </div>
      <div className="animals">
        <Animal targetKey="fruitsAndVeggies" name="Kong">
          <img src="img/gorilla.png" alt="gorilla" width="100" />
          <h5>I eat fruit</h5>
        </Animal>
        <Animal targetKey="dogFood" name="Skippy">
          <img src="img/puppy.png" alt="puppy" width="100" />
          <h5>I eat meat & pickles</h5>
        </Animal>
        <Animal targetKey="dogFood" name="Bozo">
          <Animal targetKey="fruitsAndVeggies" name="Bozo">
            <img src="img/trashcan.png" alt="trashcan" width="100" />
            <h5>I eat everything</h5>
          </Animal>
        </Animal>
      </div>
  
    </div>
  )
}
export default Game