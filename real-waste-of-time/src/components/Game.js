import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

import trashObjArr from "../utils/trashObjArr"

const Game = () => {

  // ============================================================
  // JS GAME LOGIC



  // ============================================================
  // MATTER.JS  (useEffect)

  const boxRef = useRef(null)


  // BIN REFS
  // const binRef_1 = useRef()
  // const binRef_2 = useRef()
  // const binRef_3 = useRef()
  // const binRef_4 = useRef()
  // const binRef_5 = useRef()
  // const binRef_6 = useRef()


  useEffect(() => {

    // module aliases
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint
    const Composite = Matter.Composite


    const engine = Engine.create({
      // positionIterations: 20
    });

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      options: {
        width: 1000,
        height: 600,
        background: false,
        wireframes: false,

      }
    });


    World.add(engine.world, [

      // top bar
      Bodies.rectangle(600, 0, 1200, 50, {
        isStatic: true,
        background: false,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // floor bar
      Bodies.rectangle(600, 600, 1200, 50, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // separation bar
      Bodies.rectangle(600, 400, 1200, 10, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // right wall
      Bodies.rectangle(0, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // left wall
      Bodies.rectangle(1000, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

    ]);

    World.add(engine.world, [trashObjArr[1], trashObjArr[3], trashObjArr[2], trashObjArr[0], trashObjArr[2]]);

    // trashCans

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        },
      });

    World.add(engine.world, mouseConstraint);

    //  TRASH CANS
    World.add(engine.world, [
      Bodies.rectangle(130, 500, 80, 100,
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
      ),
      Bodies.rectangle(280, 500, 80, 100,
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
      ),
      Bodies.rectangle(430, 500, 80, 100,
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
      ),
      Bodies.rectangle(580, 500, 80, 100,
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
      ),
      Bodies.rectangle(730, 500, 80, 100,
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
      ),
      Bodies.rectangle(880, 500, 80, 100,
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
      ),
    ])


    // mouse events (mousedown)
    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, {
        render: {
          sprite: {
            texture: './fish_bone.svg',
            xScale: (0.3),
            yScale: (0.3)
          }
        },
      }));
    });

    // keep the mouse in sync with rendering
    render.mouse = mouse;




    // mouse event (enddrag) - get user moved object info
    Matter.Events.on(mouseConstraint, "enddrag", function (event) {

      if (event.body.label === "locked") {

        console.log("no")
      } else {
        Composite.remove(engine.world, event.body)

      }

      console.log(event.body.label)


    });



    // REMOVING

    Engine.run(engine);

    Render.run(render);
  })


  // ============================================================
  // JSX RETURN
  return (

    <>
      <button>hi start</button>

      <div
        ref={boxRef}
        style={{
          width: 1,
          height: 1,
        }}
      >

      </div>

    </>
  )
}

export default Game
