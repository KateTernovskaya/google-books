import React from "react";
import s from "features/main/main.module.css";
import { categoriesString, sortByString, SortProps } from "state/types";
import { Filter } from "features/main/settings/sortFilter/filter";

const selectCategories: categoriesString[] = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];
const selectSortBy: sortByString[] = ["relevance", "newest"];

export const SortAndFilter = ({ sortBy, category, sortChange, categoryChange }: SortProps) => {
  return (
    <div className={s.setting}>
      <Filter<categoriesString>
        label="Categories"
        value={category}
        onChange={categoryChange}
        options={selectCategories}
      />
      <Filter<sortByString> label="Sort By" value={sortBy} onChange={sortChange} options={selectSortBy} />
    </div>
  );
};
