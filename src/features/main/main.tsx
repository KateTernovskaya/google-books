import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "features/main/header/header";
import { BooksGallery } from "features/books-gallery/booksGallery";
import { apiKey, baseUrl, maxResult } from "api/common.api";
import { Book, categoriesString, sortByString } from "components/types";
import { ProgressLinear } from "components/progress/progressLinear";
import { AlertError } from "components/alertError";

export const Main = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [sortBy, setSortBy] = useState<sortByString>("relevance");
  const [category, setCategory] = useState<categoriesString>("All");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const categoryChangeHandler = (event: SyntheticEvent<Element, Event>, value: categoriesString | null) => {
    if (value) {
      setCategory(value);
      setStartIndex(0);
    }
  };

  const sortChangeHandler = (event: SyntheticEvent<Element, Event>, value: sortByString | null) => {
    if (value) {
      setSortBy(value);
      setStartIndex(0);
    }
  };

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      setSearchInput(e.target.value.trim());
      setStartIndex(0);
    }
  };

  const loadMore30 = () => {
    setStartIndex((prevIndex) => prevIndex + maxResult);
  };

  const getBooks = () => {
    const query = `?q=${searchInput}`;
    const page = `&startIndex=${startIndex}`;
    const maxResults = `&maxResults=${maxResult}`;
    const orderBy = `&orderBy=${sortBy}`;
    const key = `&key=${apiKey}`;
    const categoryFilter = category !== "All" ? `+subject:${category}` : "";
    setLoading(true);

    axios
      .get(`${baseUrl}${query}${categoryFilter}${page}${maxResults}${orderBy}${key}`)
      .then((res) => {
        const uniqueBooks = res.data.items.filter(
          (book: Book, index: number, self: any[]) => index === self.findIndex((t) => t.id === book.id),
        );
        setBooks((prevBooks) => (startIndex === 0 ? uniqueBooks : [...prevBooks, ...uniqueBooks]));
        setTotalCount(res.data.totalItems);

        console.log(res);
      })
      .catch((err) => {
        if (searchInput === "") {
          setError("Title is required");
        } else {
          setError(err.response.data.error.message);
          console.log(err.response.data.error.message);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (searchInput) {
      getBooks();
    }
  }, [startIndex]);

  return (
    <>
      <Header
        sortBy={sortBy}
        sortChange={sortChangeHandler}
        getBooks={getBooks}
        category={category}
        categoryChange={categoryChangeHandler}
        searchChange={searchChangeHandler}
        error={error}
        setError={setError}
      />
      {loading ? <ProgressLinear /> : null}
      {error ? <AlertError title={error} /> : null}
      <BooksGallery books={books} totalCount={totalCount} loadMore30={loadMore30} />
    </>
  );
};
