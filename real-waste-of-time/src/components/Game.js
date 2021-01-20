import React, { useEffect, useRef } from "react";
import Matter, { Events } from "matter-js";

import trashObjArr from "../utils/trashObjArr"
import binObjArr from "../utils/binArr"

const Game = () => {

  // ============================================================
  // JS GAME LOGIC

  // score state
  // const [ score, setScore ] = useState(0)


  // ============================================================
  // MATTER.JS  (useEffect)

  const boxRef = useRef()


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

    // MOUSE CONTROL
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
    World.add(engine.world, binObjArr)


    // MOUSE EVENT (mousedown)
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


    // DRAG EVENT (enddrag) - get user moved object info
    const trashEl = Events.on(mouseConstraint, "startdrag", function (event) {

      let trashLabel = ""

      if (event.body) {
        trashLabel = event.body.label
      }
      return trashLabel

      // if (event.body.label === "locked") {

      //   console.log("no")
      // } else {

      //   // REMOVING
      //   Composite.remove(engine.world, event.body)

      // }

      // console.log(event.body.label)
    });

    console.log(trashObjArr[0])
    // COLLISION -- SCORE
    const binEl = Events.on(mouseConstraint, "enddrag", function (event) {

      let binLabel = ""

      if (event.body.label) {

        binLabel = event.body.label
      }
      return binLabel

    })

    // function score (){
    //   if ()
    // }

    console.log(trashEl)
    console.log(binEl)



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
