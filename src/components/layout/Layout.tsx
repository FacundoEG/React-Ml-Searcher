import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";

const Layout = () => {
  const navigate = useNavigate();
  const handleSearch = async (r) => {
    if (r) {
      navigate("/search/" + r, { replace: true }), [navigate];
    }
  };
  return (
    <div>
      <SearchForm onSearch={handleSearch}></SearchForm>
      <Outlet></Outlet>
    </div>
  );
};

export { Layout };
