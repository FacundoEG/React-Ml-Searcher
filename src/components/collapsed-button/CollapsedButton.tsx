import React from "react";
import css from "./collapsed-button.css";

export const CollapsedButton = () => {
  return (
    <div className={css.fab}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
        className={css.plus}
      />
      <a href="https://github.com/FacundoEG">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
          className={css.item}
        />
      </a>
      <a href="https://www.linkedin.com/in/facundoeg-dev">
        <img
          src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
          className={css.item}
        />
      </a>
      <a href="https://files.fm/down.php?i=mxxzpwd7g">
        <img
          src="https://cdn-icons-png.flaticon.com/512/909/909263.png"
          className={css.item}
        />
      </a>
      <a href="https://facundoeg.github.io/My-Landing-Page">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2282/2282198.png"
          className={css.item}
        />
      </a>
    </div>
  );
};
