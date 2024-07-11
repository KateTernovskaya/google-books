import React, { useEffect } from "react";
import { BookItem } from "ui/features/main/books-gallery/book/book-item";
import s from "ui/features/main/books-gallery/books.module.css";
import { Button } from "@mui/material";
import { GoTopBtn } from "ui/components/buttons/goToTop";
import { BookType } from "state/types";
import { RootStateType, useAppDispatch, useAppSelector } from "state/store";
import { loadMoreAC } from "state/books/books-actions";
import { fetchBooks } from "state/books/books-thunks";

export const BooksGallery = () => {
  const dispatch = useAppDispatch();
  const { books, searchInput, totalCount, startIndex } = useAppSelector((state: RootStateType) => state);

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchBooks());
    }
  }, [startIndex]);

  const booksMap = books.map((book: BookType) => <BookItem key={book.id} book={book} />);

  const loadMore30 = () => {
    dispatch(loadMoreAC());
  };
  const loadMore30Btn =
    books.length > 0 ? (
      <Button variant="contained" onClick={loadMore30}>
        Load more
      </Button>
    ) : null;

  const title =
    books.length === 0
      ? "What book do you want to find?"
      : `Found ${totalCount} ${books.length < 2 ? "book" : "books"}`;

  return (
    <div className={s.container}>
      <h3>{title}</h3>
      <div className={s.booksGallery}>{booksMap}</div>
      <div className={s.buttons}>
        {loadMore30Btn}
        <GoTopBtn />
      </div>
    </div>
  );
};
