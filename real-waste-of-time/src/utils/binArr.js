import Matter from "matter-js";

const Bodies = Matter.Bodies


const bin_normal = Bodies.rectangle(130, 500, 80, 100,
    {
        isStatic: true,
        isSensor: true,
        render: {
            sprite: {
                texture: './bin_green.png',
                xScale: (0.5),
                yScale: (0.5)
            }
        },
        label: "locked"
    }
)

const bin_food = Bodies.rectangle(280, 500, 80, 100,
    {
        isStatic: true,
        render: {
            sprite: {
                texture: './bin_red.png',
                xScale: (0.5),
                yScale: (0.5)
            }
        },
        label: "locked"
    }
)

const bin_paper = Bodies.rectangle(430, 500, 80, 100,
    {
        isStatic: true,
        render: {
            sprite: {
                texture: './bin_blue.png',
                xScale: (0.5),
                yScale: (0.5)
            }
        },
        label: "locked"
    }
)

const bin_glass = Bodies.rectangle(580, 500, 80, 100,
    {
        isStatic: true,
        render: {
            sprite: {
                texture: './bin_gray.png',
                xScale: (0.5),
                yScale: (0.5)
            }
        },
        label: "locked",

    }
)

const bin_plastic = Bodies.rectangle(730, 500, 80, 100,
    {
        isStatic: true,
        render: {
            sprite: {
                texture: './bin_yellow.png',
                xScale: (0.5),
                yScale: (0.5)
            }
        },
        label: "locked"
    }
)

const bin_metal = Bodies.rectangle(880, 500, 80, 100,
    {
        isStatic: true,
        render: {
            sprite: {
                texture: './bin_geen2.png',
                xScale: (0.5),
                yScale: (0.5)
            },
        },
        label: "locked"
    }
)



const binObjArr = [bin_normal, bin_food, bin_paper, bin_glass, bin_plastic, bin_metal]

export default binObjArr;