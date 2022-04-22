import React from "react";
import Carousel from "nuka-carousel";
import css from "./carrousel.css";
import "./carrousel.css";

export const Carrousel = (props) => {
  return (
    <Carousel
      dragging={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className={css["slider-button"]} onClick={previousSlide}>
          {"<"}
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className={css["slider-button"]} onClick={nextSlide}>
          {">"}
        </button>
      )}
    >
      {props.pictures.map((p) => (
        <img className={css["carrousel-image"]} key={p} src={p.url}></img>
      ))}
    </Carousel>
  );
};
