import React from "react";
import s from "features/main/main.module.css";
import { Autocomplete, TextField } from "@mui/material";

export type categoriesString = "All" | "Art" | "Biography" | "Computers" | "History" | "Medical" | "Poetry";
const selectCategories: categoriesString[] = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];

export const SortAndFilter = (props: any) => {
  return (
    <div className={s.setting}>
      <Autocomplete
        value={props.category}
        onChange={props.categoryChangeHandler}
        className={s.filter}
        disablePortal
        id="combo-box-demo"
        options={selectCategories}
        clearIcon={null}
        renderInput={(params) => <TextField {...params} variant="standard" label="Categories" />}
      />

      <Autocomplete
        value={props.sortBy}
        clearIcon={null}
        onChange={props.sortChangeHandler}
        className={s.filter}
        disablePortal
        id="combo-box-demo"
        options={["relevance", "newest"]}
        renderInput={(params) => <TextField {...params} variant="standard" label="Categories" />}
      />
    </div>
  );
};
