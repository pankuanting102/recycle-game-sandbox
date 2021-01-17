import React from "react";
// import { DragDropContainer, DropTarget } from "react-drag-drop-container"
import Animal from "../components/Animal.js"
import Food from "../components/Food.js"

const Game = () => {
  // we will use this as a custom drag element
  const customElem = () => { <button style={{ marginTop: 20, marginLeft: 20 }}>Bananas!!</button> }
  

  return (
    <div className='drag_food_to_animals'>
      <h2>Recycle Trash to Corresponding Bin!</h2>
      <div className="foods" >
          <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="banana" tastes="Delicious" image="assets/banana_1.svg"/>
          <Food customDragElement={customElem} targetKey="dogFood" label="pickle" tastes="It tasted weird" image="assets/fish_bone.svg" />
        <Food customDragElement={customElem} dragElemOpacity={0.4} targetKey="dogFood" label="lighter" tastes="Yummy" image="assets/lighter.svg" />
        <Food customDragElement={customElem} targetKey="fruitsAndVeggies" label="bananas" tastes="Yummy" image="assets/banana_2.svg" />
      </div>
      <div className="animals">
        <Animal targetKey="fruitsAndVeggies" name="Kong">
          <img src="assets/bin_closed.svg" alt="gorilla" width="100" />
          <h5>Organic</h5>
        </Animal>
        <Animal targetKey="dogFood" name="Skippy">
          <img src="assets/bin_closed.svg" alt="puppy" width="100" />
          <h5>Metal</h5>
        </Animal>
        <Animal targetKey="dogFood" name="Bozo">
          <Animal targetKey="fruitsAndVeggies" name="Bozo">
            <img src="assets/bin_closed.svg" alt="trashcan" width="100" />
            <h5>Glass</h5>
          </Animal>
        </Animal>
      </div>
  
    </div>
  )
}
export default Game