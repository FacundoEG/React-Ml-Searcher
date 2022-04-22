import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./router";
import { Loader } from "./components/loader/Loader";

import css from "pages/home/home.css";

ReactDOM.render(
  <Suspense
    fallback={
      <div className={css["loader-container"]}>
        <div className={css["cpu-image"]}></div>
        <Loader />
      </div>
    }
  >
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.querySelector(".app")
);
