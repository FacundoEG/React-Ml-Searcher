import React from "react";
import css from "./inputs.css";

export function MlFormInput() {
  return (
    <input
      className={css["ml-input"]}
      type="text"
      name="search"
      autoComplete="off"
      placeholder="Tu busqueda aquí..."
    ></input>
  );
}
