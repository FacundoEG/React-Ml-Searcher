import { atom, selector } from "recoil";

export const searchQueryState = atom({
  key: "searchQuery",
  default: "",
});

export const searchResultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const queryValue = get(searchQueryState);
    if (queryValue) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + queryValue
      );
      const data = await res.json();
      return data.results;
    } else return [];
  },
});

export const itemQueryState = atom({
  key: "itemQuery",
  default: "",
});

export const itemResultState = selector({
  key: "itemResult",
  get: async ({ get }) => {
    const itemQueryValue = get(itemQueryState);
    if (itemQueryValue) {
      const res = await fetch(
        "https://api.mercadolibre.com/items/" + itemQueryValue
      );
      const itemData = await res.json();
      return itemData;
    } else return undefined;
  },
});
