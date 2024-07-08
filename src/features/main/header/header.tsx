import React from "react";
import { Search } from "features/main/settings/search";
import { SortAndFilter } from "features/main/settings/sortFilter/sortAndFilter";
import s from "features/main/main.module.css";
import { HeaderProps } from "components/types";

export const Header = ({ getBooks, sortBy, category, sortChange, categoryChange, searchChange }: HeaderProps) => {
  return (
    <div className={s.header}>
      <h1>Search books</h1>
      <Search getBooks={getBooks} searchChange={searchChange} />
      <SortAndFilter sortBy={sortBy} sortChange={sortChange} category={category} categoryChange={categoryChange} />
    </div>
  );
};
