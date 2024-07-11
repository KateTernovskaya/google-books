import React from "react";
import { BooksGallery } from "ui/features/main/books-gallery/booksGallery";
import s from "ui/features/main/main.module.css";
import { Search } from "ui/features/main/searchSettings/search";
import { SetSettings } from "ui/features/main/searchSettings/setSettings";

export const Main = () => {
  return (
    <>
      <div className={s.setBlock}>
        <h1>Search books</h1>
        <Search />
        <SetSettings />
      </div>
      <BooksGallery />
    </>
  );
};
