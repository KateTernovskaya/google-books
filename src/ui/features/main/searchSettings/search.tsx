import React, { ChangeEvent, KeyboardEvent } from "react";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import s from "ui/features/main/main.module.css";
import { RootStateType, useAppDispatch, useAppSelector } from "state/store";
import { searchBooksAC, setErrorAC } from "state/books/books-actions";
import { fetchBooks } from "state/books/books-thunks";

export const Search = () => {
  const dispatch = useAppDispatch();
  const { searchInput, error } = useAppSelector((state: RootStateType) => state);
  const onKeyPressHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchBooksAC(e.target.value));
    if (error) {
      dispatch(setErrorAC(null));
    }
  };

  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(fetchBooks());
    }
  };

  return (
    <Paper className={s.search} component="form">
      <input type="text" className={s.none} />
      <TextField
        value={searchInput}
        variant="standard"
        onChange={onKeyPressHandler}
        onKeyPress={onEnterPressHandler}
        label={error ? error : "Search book"}
        error={!!error}
        fullWidth
      />

      <IconButton type="button" aria-label="search" onClick={() => dispatch(fetchBooks())}>
        <SearchIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
};
