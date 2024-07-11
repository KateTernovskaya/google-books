import React, { SyntheticEvent } from "react";
import s from "ui/features/main/main.module.css";
import { categoriesString, sortByString } from "state/types";
import { Filter } from "ui/features/main/searchSettings/filter/filter";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "state/store";
import { setCategoryAC, setSortAC } from "state/books/books-actions";

const selectCategories: categoriesString[] = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];
const selectSortBy: sortByString[] = ["relevance", "newest"];

export const SetSettings = () => {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector((state: RootStateType) => state);

  const categoryChangeHandler = (event: SyntheticEvent<Element, Event>, value: categoriesString | null) => {
    if (value) {
      dispatch(setCategoryAC(value));
    }
  };

  const sortChangeHandler = (event: SyntheticEvent<Element, Event>, value: sortByString | null) => {
    if (value) {
      dispatch(setSortAC(value));
    }
  };

  return (
    <div className={s.setting}>
      <Filter<categoriesString>
        label="Categories"
        value={category}
        onChange={categoryChangeHandler}
        options={selectCategories}
      />
      <Filter<sortByString> label="Sort By" value={sortBy} onChange={sortChangeHandler} options={selectSortBy} />
    </div>
  );
};
