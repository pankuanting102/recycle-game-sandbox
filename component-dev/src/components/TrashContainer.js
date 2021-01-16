import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


const TrashContainer = () => {

    console.log("TrashContainer!");

    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))


    const bind = useDrag(({ down, movement: [mx, my] }) => {
        set({ x: down ? mx : 0, y: down ? my : 0 })
    })

    return (
        
        <>
        <div>TrashContainer!</div>

        <animated.div {...bind()} style={{ x, y }} />

        </>
    )

};

export default TrashContainer;
