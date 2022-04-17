// import logo from "./logo.svg";
// using images with a folder and import word
import lofiFondo from "../assets/lofiFondo.jpg";
import Dogs from "./Dogs";
import "../styles/App.css";
import { useState } from "react";
import Title from "./Title";
import Modal from "./Modal";
// using react hook called
// *react hooks are just functions who do good shi*t for us
// all react hooks starts with 'use' word

// again, a react component is just a function, who starts with a capital letter
function App() {
  // array destructuring
  // the first value is the actual value returned by useState function
  // the second value is a function which would use to change the state value
  // we can ONLY call useState at the top scope of our component-function, and also  it cannot be called from outside this function
  const [showDogs, setShowDogs] = useState(false);
  const [showModal, setShowModal] = useState(true);

  // handler functions
  const makeDogsVisible = () => {
    setShowDogs(true);
  };

  const makeDogsInvisible = () => {
    setShowDogs(false);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

  const openDialog = () => {
    setShowModal(true);
  };

  // we return it, always
  return (
    <div className="parent-wrapper" id="parent">
      <Title
        title="Bienvenidos a perritos.org"
        subtitle="En estos momentos nuestros perros son:"
      />
      <div className="buttons-container" style={{
        width:'35%',
        display:'flex',
        'justifyContent':'space-evenly'
      }}>
        {!showDogs && (
          <button onClick={makeDogsVisible}>Mostrar perritos</button>
        )}
        {showDogs && (
          <button onClick={makeDogsInvisible}>Esconder perritos</button>
        )}

        {showDogs && <Dogs />}
        <button onClick={openDialog}>Agrega tu perrrrrito!</button>
        {/* if we need a child component to send data to the parent or to make changes on his parent component, we can 
        give it a function to make changes on variables inside this current scope */}
        {showModal && (
          <Modal closeDialog={closeDialog}>
            {/* we can use component tags like this to put HTML inside them, needs to use {props.children} inside the component  */}
            <h2>Un perrito quiere tu click en este modal!</h2>
          </Modal>
        )}
      </div>
    </div>
  );
}

// we export it, always
// to make it visible for another .js files
export default App;
