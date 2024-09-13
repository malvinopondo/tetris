import React from "react";
import "./App.css";
import Tetris from "./Components/Tetris";
import { randomTetrominos } from "./Tetrominos";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

const App = () => {
  return  <><LoginSignup /><Tetris /></>;
};

export default App;
