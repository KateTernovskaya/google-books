import React from "react";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import s from "features/main/main.module.css";

export const Search = (props: any) => {
  const searchBook = (e: any) => {
    if (e.charCode === 13) {
      props.getBooks();
    }
  };

  return (
    <div>
      <Paper className={s.search} component="form">
        <input type="text" className={s.none} />

        <TextField
          variant="standard"
          //value={props.searchInput}
          onChange={props.searchChangeHandler}
          onKeyPress={searchBook}
          label="Search book"
          fullWidth
        />

        <IconButton type="button" aria-label="search" onClick={props.getBooks}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </Paper>
    </div>
  );
};
