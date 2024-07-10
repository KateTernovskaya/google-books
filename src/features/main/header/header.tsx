import React from "react";
import { Search } from "features/main/settings/search";
import { SortAndFilter } from "features/main/settings/sortFilter/sortAndFilter";
import s from "features/main/main.module.css";
import { HeaderProps } from "state/types";

export const Header = ({
  getBooks,
  sortBy,
  category,
  sortChange,
  categoryChange,
  searchChange,
  error,
  setError,
}: HeaderProps) => {
  return (
    <div className={s.header}>
      <h1>Search books</h1>
      <Search getBooks={getBooks} searchChange={searchChange} error={error} setError={setError} />
      <SortAndFilter sortBy={sortBy} sortChange={sortChange} category={category} categoryChange={categoryChange} />
    </div>
  );
};
