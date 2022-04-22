import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  searchQueryState,
  searchResultsState,
  itemQueryState,
  itemResultState,
} from "../atoms/atoms";

// SEARCH RESULT HOOK
export function useSearchResults() {
  const params = useParams();

  const setQuery = useSetRecoilState(searchQueryState);

  useEffect(() => {
    setQuery(params.busqueda);
  }, [params]);

  const searchResults = useRecoilValue(searchResultsState);
  return searchResults;
}

// SEARCH ITEM HOOK
export function useItemResults() {
  const params = useParams();
  const setItemQuery = useSetRecoilState(itemQueryState);

  useEffect(() => {
    setItemQuery(params.id);
  }, [params]);

  const itemResult = useRecoilValue(itemResultState);
  return itemResult;
}
