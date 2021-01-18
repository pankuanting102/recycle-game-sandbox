// import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { useSpring, animated } from "react-spring";
// import { useGesture } from "react-use-gesture";
// import { ReactSVG } from "react-svg";
// import "./App.css";

// import Bone from "./assets/fish_bone.svg"
// import Bin from "./assets/bin_closed.svg"


// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

// document.addEventListener("gesturestart", (e) => e.preventDefault());
// document.addEventListener("gesturechange", (e) => e.preventDefault());


import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App"



ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);

reportWebVitals();
