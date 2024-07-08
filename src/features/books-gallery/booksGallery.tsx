import React from "react";
import { BookItem } from "features/books-gallery/book-item";
import s from "../books-gallery/books.module.css";
import { Button } from "@mui/material";
import { GoTopBtn } from "components/buttons/goToTop";
import { Book } from "components/types";

type BooksGalleryProps = {
  books: Book[];
  totalCount: number;
  loadMore30: () => void;
};

export const BooksGallery = ({ books, totalCount, loadMore30 }: BooksGalleryProps) => {
  const booksMap = books.map((book: Book) => <BookItem key={book.id} book={book} />);

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
