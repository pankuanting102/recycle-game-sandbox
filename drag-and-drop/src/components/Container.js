import React, { useState, useCallback } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Dustbin } from './Bin';
import { Box } from './Box';
import { ItemTypes } from '../utils/ItemTypes';
import update from 'immutability-helper';
import Milk from './Assets/milk_box.svg';
import Banana from './Assets/banana_1.svg';
import Glass from './Assets/glass.svg';
import Bin from './Assets/bin_closed.svg';




export const Container = () => {
    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.GLASS], lastDroppedItem: null, asset: Bin },
        { accepts: [ItemTypes.FOOD], lastDroppedItem: null, asset: Bin },
        {
            accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
            lastDroppedItem: null, asset: Bin
        },
        { accepts: [ItemTypes.PAPER, NativeTypes.FILE], asset: Bin },
    ]);
    const [boxes] = useState([
        { name: Glass, type: ItemTypes.GLASS },
        { name: Banana, type: ItemTypes.FOOD },
        { name: Milk, type: ItemTypes.PAPER },
    ]);
    const [droppedBoxNames, setDroppedBoxNames] = useState([]);
    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(update(dustbins, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins]);
    return (<div>
        	<div style={{ overflow: 'hidden', clear: 'both' }}>
				{boxes.map(({ name, type }, index) => (<Box name={name} type={type} isDropped={isDropped(name)} key={index}/>))}
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
				{dustbins.map(({ accepts, lastDroppedItem, asset }, index) => (<Dustbin accept={accepts} lastDroppedItem={lastDroppedItem} asset={asset} onDrop={(item) => handleDrop(index, item)} key={index}/>))}
			</div>

		
		</div>);
};
