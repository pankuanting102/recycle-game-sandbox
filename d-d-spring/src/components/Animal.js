import React, {useState} from 'react';
import { DropTarget } from "react-drag-drop-container";

/*
    Animal is set up as a drop target. Required props are targetKey and name. 
*/
const Animal = (props) => {

    // constructor(props)=> {
    //     super(props);
    //     this.state = {thankYouMessage: ''};
    // }

    const [state, setState] = useState ({
        thankYouMessage: ""
    })

    const dropped = (e) => {
        e.containerElem.style.visibility="display";
        setState({thankYouMessage: `Thanks for the ${e.dragData.label}! ${e.dragData.tastes}!`})
        console.log({'onHit event passed to target animal:':e});
    };

   
        return (
        <DropTarget
            onHit={dropped}
            targetKey={props.targetKey}
            dropData={{name: props.name}}
        >
            <div className='animal'>
                <div style={{minHeight: 24, fontStyle: 'italic'}}>
                    {state.thankYouMessage}
                </div>
                {props.children}
            </div>
        </DropTarget>
        );
    
}

export default Animal