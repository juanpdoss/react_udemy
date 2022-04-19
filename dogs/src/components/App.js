// import logo from "./logo.svg";
// using images with a folder and import word
// import lofiFondo from "../assets/lofiFondo.jpg";
import Dogs from "./Dogs";
import "../styles/App.css";
import { useState } from "react";
import Title from "./Title";
import Modal from "./Modal";
import NewDogForm from "./NewDogForm";
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
  const [showModal, setShowModal] = useState(false);
  const [dogs, setDogs] = useState([
    {
      name: "lupi",
      age: 13,
      color: "pink",
      id: 1,
    },
    {
      name: "dumbo",
      age: 11,
      color: "black",
      id: 2,
    },
    {
      name: "kira",
      age: 7,
      color: "blue",
      id: 3,
    },
    {
      name: "luli",
      age: 12,
      color: "yelow",
      id: 4,
    },
    {
      name: "negro",
      age: 11,
      color: "red",
      id: 5,
    },
  ]);

  // handler functions
  const makeDogsVisible = () => {
    setShowDogs(true);
  };

  const makeDogsInvisible = () => {
    setShowDogs(false);
  };

  const closeDialog = (dog) => {
    setShowModal(false);
    addDog(dog);
  };

  const openDialog = () => {
    setShowModal(true);
  };

  const addDog = (dog) => {
    setDogs((currentDogs) => {
      dog.id = Math.floor(Math.random() * 10000);
      return [...currentDogs, dog];
    });
  };

  const deleteDogByid = (id) => {
    // is important to use this argument (on this scenario is called currentDogs), is provided by react and guaranteed to be the
    // current state of our dogs array

    setDogs((currentDogs) => {
      return currentDogs.filter((dog) => {
        return dog.id !== id;
      });
    });
  };

  // we return it, always
  return (
    <div className="parent-wrapper" id="parent">
      <Title
        title="Bienvenidos a perritos.org"
        subtitle="En estos momentos nuestros perros son:"
      />
      <div
        className="buttons-container"
        style={{
          width: "35%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Dogs dogs={dogs} deleteDogByid={deleteDogByid} />
        {/* if we need a child component to send data to the parent or to make changes on his parent component, we can 
        give it a function to make changes on variables inside this current scope */}
        {showModal && (
          <Modal>
            {/* we can use component tags like this to put HTML inside them, needs to use {props.children} inside the component  */}
            <NewDogForm closeDialog={closeDialog} />
          </Modal>
        )}
      </div>
      <button className="add-button" onClick={openDialog}>
        Agrega tu perrrrrito!
      </button>
    </div>
  );
}

// we export it, always
// to make it visible for another .js files
export default App;
