import React from "react";
import s from "features/main/main.module.css";
import { categoriesString, SortProps } from "components/types";
import { Filter } from "features/main/settings/sortFilter/filter";

const selectCategories: categoriesString[] = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];

export const SortAndFilter = ({ sortBy, category, sortChange, categoryChange }: SortProps) => {
  return (
    <div className={s.setting}>
      <Filter value={category} label="Categories" onChange={categoryChange} options={selectCategories} />
      <Filter value={sortBy} label="Sort By" onChange={sortChange} options={["relevance", "newest"]} />
    </div>
  );
};
