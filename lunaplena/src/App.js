// import logo from "./logo.svg";
// using images with a folder and import word
import lofiFondo from "./assets/lofiFondo.jpg";
import "./App.css";
import { useState } from "react";

// using react hook called
// *react hooks are just functions who do good shi*t for us
// all react hooks starts with 'use' word

// again, a react component is just a function
function App() {
  const name = "Lofi";
  const buttonMessage = "Cambiar fondo de color";
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // array destructuring
  // the first value is the actual value returned by useState function
  // the second value is a function which would use to change the state value
  const [color, setColor] = useState(randomColor);

  // handler functions
  const changeBackgroundColor = () => {
    // we need to use the hook status to make react re-render the DOM, applying changes done in runtime
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  };

  // we return it, always
  return (
    <div className="App" id="parent" style={{ backgroundColor: randomColor }}>
      <img src={lofiFondo} className="App-img" alt="logo" />
      <h1>Soy un fondo lofi {name}, jeje .</h1>
      <button onClick={changeBackgroundColor}>{buttonMessage}</button>
      <p>Color random actual {randomColor}</p>
    </div>
  );
}

// we export it, always
// to make it visible for another .js files
export default App;
