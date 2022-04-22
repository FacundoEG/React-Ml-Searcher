import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./search-result.css";
import { SearchPrice, SearchTitle } from "ui/fonts/Fonts";

export const SearchResultItem = (props) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/item/" + props.id, { replace: true }), [navigate];
  };

  return (
    <a onClick={handleNavigate} className={css["result-card"]}>
      <img src={props.thumbnail} />
      <div className={css["data-container"]}>
        <SearchTitle>{props.title}</SearchTitle>
        <SearchPrice>{props.price}</SearchPrice>
      </div>
    </a>
  );
};
