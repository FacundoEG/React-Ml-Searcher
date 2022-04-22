import React from "react";
import { Carrousel } from "../carrousel/Carrousel";
import { ItemTitle, ItemPrice, ItemDescription } from "ui/fonts/Fonts";
import { MlButton } from "ui/buttons/Buttons";
import css from "./result-item.css";

export const ResultItem = (props) => {
  console.log(props);
  return (
    <div className={css["result-container"]}>
      <Carrousel
        getControlsContainerStyles="CenterCenter"
        pictures={props.pictures}
      ></Carrousel>
      <div className={css["data-container"]}>
        <ItemDescription>
          {props.condition == "new" ? "Nuevo" : "Usado"} |{" "}
          {props.condition !== "new" ? "" : "vendidos +" + props.sold}
        </ItemDescription>
        <ItemTitle>{props.title}</ItemTitle>
        <ItemPrice>{"$ " + props.price}</ItemPrice>
        <MlButton>{props.permalink}</MlButton>
      </div>
    </div>
  );
};
