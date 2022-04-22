import React from "react";
import css from "./fonts.css";

export function HomeTitle({ children }) {
  return <h1 className={css["home-title"]}>{children}</h1>;
}

export function ErrorTitle({ children }) {
  return <h1 className={css["error-title"]}>{children}</h1>;
}

export function SearchTitle({ children }) {
  return <h2 className={css["search-title"]}>{children}</h2>;
}

export function SearchPrice({ children }) {
  const trim = children.toString().split(".");
  const price = trim[0];
  const subprice = trim[1] || "";

  return (
    <h2 className={css["search-price"]}>
      {" "}
      {"$ " + price}
      <sup style={{ fontSize: "13px" }}>{subprice}</sup>
    </h2>
  );
}

export function ItemTitle({ children }) {
  return <h1 className={css["item-title"]}>{children}</h1>;
}

export function ItemPrice({ children }) {
  return <span className={css["item-price"]}>{children}</span>;
}

export function ItemDescription({ children }) {
  return <span className={css["item-description"]}>{children}</span>;
}
