import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

import trashObjArr from "../utils/trashObjArr"

const Game = () => {

  // ============================================================
  // JS GAME LOGIC



  // ============================================================
  // MATTER.JS  (useEffect)

  const boxRef = useRef(null)

  useEffect(() => {

    // module aliases
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint



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



    // const ballA = Bodies.circle(210, 100, 50, {
    //   restitution: 0.5,
    //   label: "metal",
    //   render: {
    //     sprite: {
    //       texture: './banana_1.svg',
    //       xScale: (0.3),
    //       yScale: (0.3)
    //     }
    //   },
    // });
    // const ballB = Bodies.circle(210, 100, 50, {
    //   render: {
    //     sprite: {
    //       texture: './fish_bone.svg',
    //       xScale: (0.3),
    //       yScale: (0.3)
    //     }
    //   },
    //   label: fishRef.current
    // });

    // const ballC = (210, 100, 30, {
    //   restitution: 0.5,
    //   label: "metal",
    //   render: {
    //     sprite: {
    //       texture: './banana_1.svg',
    //       xScale: (0.1),
    //       yScale: (0.1)
    //     }
    //   },
    // });

    World.add(engine.world, [

      // top bar
      Bodies.rectangle(600, 0, 1200, 50, {
        isStatic: true,
        background: false,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        }
      }),

      // floor bar
      Bodies.rectangle(600, 600, 1200, 50, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        }
      }),

      // separation bar
      Bodies.rectangle(600, 400, 1200, 10, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        }
      }),

      // right wall
      Bodies.rectangle(0, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        }
      }),

      // left wall
      Bodies.rectangle(1000, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        }
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


    console.log(MouseConstraint)

    World.add(engine.world, mouseConstraint);

    //  TRASH CANS
    World.add(engine.world, [
      Bodies.rectangle(130, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
        }
      ),
      Bodies.rectangle(280, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
        }
      ),
      Bodies.rectangle(430, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
        }
      ),
      Bodies.rectangle(580, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
        }
      ),
      Bodies.rectangle(730, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
        }
      ),
      Bodies.rectangle(880, 500, 80, 100,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: './bin_closed.svg',
              xScale: (0.5),
              yScale: (0.5)
            }
          },
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


    // mouse event (enddrag) - get user moved object info
    Matter.Events.on(mouseConstraint, "enddrag", function (event) {

      console.log(event)

    });

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
