import { useState } from "react";

function Dogs() {

  const [dogs, setDogs] = useState([
    {
      name: "lupi",
      age: 13,
      id: 1,
    },
    {
      name: "dumbo",
      age: 11,
      id: 2,
    },
    {
      name: "kira",
      age: 7,
      id: 3,
    },
    {
      name: "luli",
      age: 12,
      id: 4,
    },
    {
      name: "negro",
      age: 11,
      id: 5,
    },
  ]);

  const deleteDogByid = (id) => {
    // is important to use this argument (on this scenario is called currentDogs), is provided by react and guaranteed to be the
    // current state of our dogs array

    setDogs((currentDogs) => {
      return currentDogs.filter((dog) => {
        return dog.id !== id;
      });
    });
  };

  return (
    <section>
      {dogs.map((dog) => {
        // IT IS REALLY IMPORTANT TO SET THIS KEY VALUE IN OUR JSX ELEMENTS, REACT USE THEM TO KEEP TRACK OF THE STATES
        return (
          <span key={dog.id}>
            <p>
              Mi nombre es {dog.name} y tengo {dog.age} años. :)
            </p>
            {/* it is also important to call this function inside an arrow function bc if not, the function will be fired on component first rendered */}
            <button
              onClick={() => {
                deleteDogByid(dog.id);
              }}
            >
              Quiero irme!
            </button>
          </span>
        );
      })}
    </section>
  );
}

export default Dogs;
