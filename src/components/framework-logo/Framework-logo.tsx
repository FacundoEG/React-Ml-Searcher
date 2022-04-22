import React from "react";
import css from "./framework-logo.css";
import svg from "../../assets/recoil.svg?url";

export const FrameworkLogo = (props) => {
  let logoUrl;
  let reference;

  if (props.type === "react") {
    logoUrl =
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg";
    reference = "https://reactjs.org/";
  }

  if (props.type === "webpack") {
    logoUrl = "https://webpack.js.org/site-logo.1fcab817090e78435061.svg";
    reference = "https://webpack.js.org/";
  }

  if (props.type === "recoil") {
    logoUrl = svg;
    reference = "https://recoiljs.org/";
  }

  return (
    <a className={css.logo} href={reference}>
      <img src={logoUrl} />
    </a>
  );
};
