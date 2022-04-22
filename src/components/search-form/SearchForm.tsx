import React from "react";
import { SearchButton } from "ui/buttons/Buttons";
import { MlFormInput } from "ui/inputs/Inputs";
import css from "./search-form.css";

export const SearchForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["search-form"]}>
      <a className={css["nav-logo"]} href="/"></a>
      <label className={css["search-form-label"]}>
        <MlFormInput></MlFormInput>
      </label>
      <SearchButton>
        <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png" />
      </SearchButton>
    </form>
  );
};
