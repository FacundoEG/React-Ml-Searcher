import React from "react";
import { Carrousel } from "../carrousel/Carrousel";
import {
  ItemTitle,
  ItemPrice,
  ItemDescription,
  SemiBold,
} from "ui/fonts/Fonts";
import { MlButton } from "ui/buttons/Buttons";
import { AtributeInput } from "ui/inputs/Inputs";
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
        <SemiBold>Stock Disponible</SemiBold>
        <ItemPrice>{"$ " + props.price}</ItemPrice>
        <MlButton>{props.permalink}</MlButton>
        <AtributeInput>{props.atribute}</AtributeInput>
      </div>
    </div>
  );
};
