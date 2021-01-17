import { ReactSVG } from 'react-svg'

const BinsContainer = ({asset, index}) => {

    console.log("BinContainer!");

    return (
       <ReactSVG src={asset} zIndex={0} style={{border: "1px red solid", display: "inline", float: "left"}}/>
    )
};

export default BinsContainer;
