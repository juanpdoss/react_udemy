// import logo from "./logo.svg";
// using images with a folder and import word
import lofiFondo from "./assets/lofiFondo.jpg";
import "./App.css";

// using react hook called 
// *react hooks are just functions who do good shi*t for us
// all react hooks starts with 'use' word

// again, a react component is just a function
function App() {
  let name = "Lofi";
  const buttonMessage = "Cambiar fondo de color";

  // handler functions
  const changeBackgroundColor = () => {
    // we need to use the hook status to make react re-render the DOM, applying changes done in runtime

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.info("evento handleado, color random:", randomColor);
    document.getElementById("root").style.backgroundColor = randomColor;
  };

  // we return it, always
  return (
    <div className="App" id="parent">
      <img src={lofiFondo} className="App-img" alt="logo" />
      <h1>Soy un fondo lofi {name}, jeje .</h1>
      <button onClick={changeBackgroundColor}>{buttonMessage}</button>
    </div>
  );
}

// we export it, always
// to make it visible for another .js files
export default App;
