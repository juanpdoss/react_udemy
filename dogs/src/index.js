import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";


// entry point of our app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
