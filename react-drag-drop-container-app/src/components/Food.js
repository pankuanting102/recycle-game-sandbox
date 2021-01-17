/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { DragDropContainer } from "react-drag-drop-container";

/* 
    Food is a draggable element (in a DragDropContainer)
*/

const Food = (props) => {

  const landedOn = (e) => {
    console.log('I was dropped on ' + e.dropData.name)
    console.log({ 'onDrop event passed back to Food': e });
  }


  // note use of render prop below, rather than child element
  return (
    <DragDropContainer
      targetKey={props.targetKey}
      dragClone={props.dragClone || false}
      dragData={{ label: props.label, tastes: props.tastes }}
      customDragElement={props.customDragElement}
      onDrop={landedOn}
      render={() => {
        return <img src={props.image} alt="name" height="45" style={{ marginLeft: 40 }} />
      }}
    />
  );

}

export default Food;