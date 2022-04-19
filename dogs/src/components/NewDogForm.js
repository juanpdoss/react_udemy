import styles from "../styles/NewDogForm.module.css";
import React from "react";
import { useState } from "react";

//  to track user input we are going to use onchange event

export default function NewDogForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [color, setColor] = useState("black");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default behavior (in this case) of the submit event, so our app is not gonna be refreshed
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Me llamo</span>
        <input
          type="text"
          id="dog-name"
          className="input"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </label>

      <label>
        <span>Mi edad perrrrruna</span>
        <input
          type="number"
          id="dog-age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
      </label>

      <label>
        <span>Mi color</span>
        <select
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option value="brown">Marron</option>
          <option value="yellow">Amarillo</option>
          <option value="pink">Rosado</option>
        </select>
      </label>

      <button
        className={styles.modal}
        onClick={() =>
          props.closeDialog({ name: name, age: age, color: color })
        }
      >
        Guardar!
      </button>
    </form>
  );
}
