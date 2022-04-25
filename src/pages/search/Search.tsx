import React from "react";
import { SearchResultItem } from "../../components/search-result/SearchResult";
import { useSearchResults } from "hooks/hooks";
import { ErrorTitle } from "ui/fonts/Fonts";
import css from "./search.css";
export const Search = () => {
  const searchResults = useSearchResults();
  console.log(searchResults);

  return (
    <div>
      {
        <div className={css["results-container"]}>
          {searchResults.length !== 0 ? (
            searchResults.map((r) => (
              <SearchResultItem
                key={r.id}
                price={r.price}
                condition={r.condition}
                permalink={r.permalink}
                id={r.id}
                title={r.title}
                thumbnail={r.thumbnail}
              />
            ))
          ) : (
            <div className={css["error-container"]}>
              <ErrorTitle>
                Ups.. no hemos encontrado ningun resultado con el nombre de tu
                busqueda
              </ErrorTitle>
              <img
                style={{
                  width: "100%",
                  maxWidth: "550px",
                  margin: "0 auto",
                  padding: "20px",
                }}
                src="https://www.diversioncolsubsidio.com/uploads/item/e2/images/error404.svg"
                alt=""
              />
            </div>
          )}
        </div>
      }
    </div>
  );
};
