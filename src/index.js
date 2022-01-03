import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "@popperjs/core";
import "animate.css";
import "./sass/main.scss";

import { HeroesApp } from "./HeroesApp";

ReactDOM.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
  document.getElementById("root")
);
