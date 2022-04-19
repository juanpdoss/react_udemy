// used rfc snippet shorthand
import React from "react";
// we are using styles to name this import, but it's can be whatever we want
import styles from "../styles/Modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
}
