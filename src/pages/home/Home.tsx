import React from "react";
import css from "./home.css";
import { FrameworkLogo } from "components/framework-logo/Framework-logo";
import { CollapsedButton } from "components/collapsed-button/CollapsedButton";
import { HomeTitle } from "ui/fonts/Fonts";

export const App = () => {
  return (
    <div className={css["home-container"]}>
      <div className={css["home-container__presentation"]}>
        <div>
          <HomeTitle>Buscador de Mercadolibre by Facundo Graña</HomeTitle>
        </div>
        <div className={css["cpu-image"]}></div>
      </div>
      <div className={css["logo-container"]}>
        <h2 className={css.powered}>Powered by:</h2>
        <FrameworkLogo type="react"></FrameworkLogo>{" "}
        <h2 className={css.plus} style={{ color: "white" }}>
          +
        </h2>
        <FrameworkLogo type="webpack"></FrameworkLogo>{" "}
        <h2 style={{ color: "white", margin: 0 }}>+</h2>
        <FrameworkLogo type="recoil"></FrameworkLogo>
      </div>
      <CollapsedButton></CollapsedButton>
    </div>
  );
};
