import React, { KeyboardEvent } from "react";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import s from "features/main/main.module.css";
import { SearchProps } from "components/types";

export const Search = ({ getBooks, searchChange, error, setError }: SearchProps) => {
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error) setError(null);
    if (e.key === "Enter") {
      getBooks();
    }
  };

  return (
    <Paper className={s.search} component="form">
      <input type="text" className={s.none} />
      <TextField
        variant="standard"
        onChange={searchChange}
        onKeyUp={onKeyPressHandler}
        label={error ? error : "Search book"}
        error={!!error}
        helperText={error}
        fullWidth
      />

      <IconButton type="button" aria-label="search" onClick={getBooks}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
};
