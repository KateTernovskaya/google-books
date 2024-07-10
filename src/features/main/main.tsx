import React, { ChangeEvent, SyntheticEvent, useEffect } from "react";
import { Header } from "features/main/header/header";
import { BooksGallery } from "features/books-gallery/booksGallery";
import { categoriesString, sortByString } from "state/types";
import { ProgressLinear } from "components/progress/progressLinear";
import { AlertError } from "components/alertError";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "state/store";
import { clearErrorAC, loadMoreAC, searchBooksAC, setCategoryAC, setSortAC } from "state/actions";
import { fetchBooks } from "state/thunks";

export const Main = () => {
  const dispatch = useDispatch();
  const { books, searchInput, totalCount, startIndex, sortBy, category, loading, error } = useSelector(
    (state: RootStateType) => state,
  );

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

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      dispatch(searchBooksAC(e.target.value.trim()));
    }
  };

  const loadMore30 = () => {
    dispatch(loadMoreAC());
  };

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchBooks());
    }
  }, [startIndex]);

  return (
    <>
      <Header
        sortBy={sortBy}
        sortChange={sortChangeHandler}
        getBooks={() => dispatch(fetchBooks())}
        category={category}
        categoryChange={categoryChangeHandler}
        searchChange={searchChangeHandler}
        error={error}
        setError={() => dispatch(clearErrorAC())}
      />
      {loading && <ProgressLinear />}
      {error && <AlertError title={error} />}
      <BooksGallery books={books} totalCount={totalCount} loadMore30={loadMore30} />
    </>
  );
};
