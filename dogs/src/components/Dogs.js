function Dogs(props) {
  return (
    <section>
      {props.dogs.map((dog) => {
        // IT IS REALLY IMPORTANT TO SET THIS KEY VALUE IN OUR JSX ELEMENTS, REACT USE THEM TO KEEP TRACK OF THE STATES
        return (
          <span key={dog.id}>
            <p>
              Mi nombre es {dog.name} y tengo {dog.age} años.
            </p>
            <p>Soy de color {dog.color}</p>
            {/* it is also important to call this function inside an arrow function bc if not, the function will be fired on component first rendered */}

            <button
              onClick={() => {
                props.deleteDogByid(dog.id);
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
