import React from "react";
import { useItemResults } from "hooks/hooks";
import { ResultItem } from "components/result-item/ResultItem";
import "./item.css";

export const Item = () => {
  const itemResult = useItemResults();
  console.log(itemResult);

  return (
    <div>
      {itemResult ? (
        <ResultItem
          key={itemResult.id}
          sold={itemResult["sold_quantity"]}
          atribute={itemResult.attributes[0]["value_name"]}
          price={itemResult.price}
          condition={itemResult.condition}
          permalink={itemResult.permalink}
          id={itemResult.id}
          title={itemResult.title}
          pictures={itemResult.pictures}
        />
      ) : null}
    </div>
  );
};
