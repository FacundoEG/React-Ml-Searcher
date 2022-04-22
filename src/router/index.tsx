import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "pages/home/Home";
import { Layout } from "components/layout/Layout";
import { Item } from "pages/item/Item";
import { Search } from "pages/search/Search";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
        <Route path="/search/:busqueda" element={<Search />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
