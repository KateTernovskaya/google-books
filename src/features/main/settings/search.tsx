import React from "react";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import s from "features/main/main.module.css";
import { SearchProps } from "components/types";

export const Search = ({ getBooks, searchChange }: SearchProps) => {
  const searchBook = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) getBooks();
  };

  return (
    <div>
      <Paper className={s.search} component="form">
        <TextField variant="standard" onChange={searchChange} onKeyPress={searchBook} label="Search book" fullWidth />

        <IconButton type="button" aria-label="search" onClick={getBooks}>
          <SearchIcon fontSize="large" />
        </IconButton>
      </Paper>
    </div>
  );
};
