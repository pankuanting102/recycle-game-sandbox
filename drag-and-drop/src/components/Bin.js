import React from 'react';
import { useDrop } from 'react-dnd';
// import Bin from './Assets/bin_closed.svg'
const style = {
    // height: '12rem',
    width: '20vw',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    // color: 'white',
    // padding: '1rem',
    // textAlign: 'center',
    // fontSize: '1rem',
    // lineHeight: 'normal',
    float: 'left',
};
export const Dustbin = ({ accept, lastDroppedItem, onDrop, asset }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (<div ref={drop}>
			
            <img alt="bin" src={asset} style={style}/>
		</div>);
};



{isActive
    ? 'Release to drop'
    : `This dustbin accepts: ${accept.join(', ')}`}

        {lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)}