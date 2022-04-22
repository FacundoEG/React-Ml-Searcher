import React from "react";
import css from "./buttons.css";

export function SearchButton({ children }) {
  return <button className={css["search-button"]}>{children}</button>;
}

export function MlButton({ children }) {
  return (
    <a className={css["ml-anchor"]} href={children}>
      <button className={css["ml-button"]}>Ver Producto</button>
    </a>
  );
}
