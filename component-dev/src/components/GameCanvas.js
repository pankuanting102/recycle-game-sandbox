
import React, { useState } from "react";
import TrashContainer from "./TrashContainer";
import BinsContainer from "./BinsContainer";
// import { ItemTypes } from '../utils/ItemTypes';
import Milk from "./assets/milk_box.svg";
import Banana from "./assets/banana_1.svg";
import Glass from "./assets/glass.svg";
import Bin from "./assets/bin_closed.svg";
import MetalCan from "./assets/metal_can_1.svg";
import Tire from "./assets/tire.svg";
import GlassBottle from "./assets/glass_bottle_1.svg";
import Lighter from "./assets/lighter.svg";
import Bone from "./assets/fish_bone.svg";
import FaceWash from "./assets/facewash_tube.svg";




const GameCanvas = () => {
  const [bins , setBin] = useState([
    { asset: Bin },
    { asset: Bin },
    { asset: Bin },
    { asset: Bin },
  ]);
  const [trash, setTrash] = useState([
    { name: Glass },
    { name: Banana },
    { name: Milk },
    { name: MetalCan },
    { name: Tire },
    { name: GlassBottle },
    { name: Lighter },
    { name: Bone },
    { name: FaceWash },
  ]);
  return (
    <div>
      
      <div  style={{ overflow: "visible", clear: "both" }}>
        {trash.map(({ name }, index) => (
          <TrashContainer zIndex={1} name={name} key={index}/>
          

        ))}
      
       
      </div>
      <div  style={{ overflow: "visible", clear: "both" }}>
        {bins.map(({ asset } , index) => (
          <BinsContainer zIndex={0} asset={asset}  key={index}/>
        ))}
      </div>

        

    </div>
  );
};
export default GameCanvas;
