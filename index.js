import React from "react";
import { createRoot } from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import { NavBar } from "./NavBar";
import App from "./App";
import "./index.css";

//var element = <button className="btn btn-danger">Hello!</button>;

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(element);
//console.log(element);
root.render(<App />);
