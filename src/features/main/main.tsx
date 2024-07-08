import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "features/main/header/header";
import { BooksGallery } from "features/books-gallery/booksGallery";
import { categoriesString } from "features/main/settings/sortAndFilter";
import { apiKey, baseUrl, maxResult } from "../../api/common.api";

export const Main = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [sortBy, setSortBy] = useState("relevance");
  const [category, setCategory] = useState<categoriesString>("All");

  const categoryChangeHandler = (event: ChangeEvent<{}>, newValue: any) => {
    if (newValue) {
      setCategory(newValue);
      setStartIndex(0);
    }
  };

  const sortChangeHandler = async (event: any, newValue: any) => {
    if (newValue) {
      setSortBy(newValue);
      setStartIndex(0);
    }
  };

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchInput(e.target.value);
      setStartIndex(0);
    }
  };

  useEffect(() => {
    if (searchInput) {
      getBooks();
    }
  }, [sortBy, category, startIndex]);

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

    axios
      .get(`${baseUrl}${query}${categoryFilter}${page}${maxResults}${orderBy}${key}`)
      .then((res) => {
        const uniqueBooks = res.data.items.filter(
          (book: any, index: number, self: any[]) => index === self.findIndex((t) => t.id === book.id),
        );
        setBooks((prevBooks) => (startIndex === 0 ? uniqueBooks : [...prevBooks, ...uniqueBooks]));
        setTotalCount(res.data.totalItems);

        console.log(res);
      })
      .catch((err) => console.log(err.response.data.error.message));
  };

  return (
    <>
      <Header
        sortBy={sortBy}
        sortChangeHandler={sortChangeHandler}
        getBooks={getBooks}
        category={category}
        categoryChangeHandler={categoryChangeHandler}
        searchInput={searchInput}
        searchChangeHandler={searchChangeHandler}
      />
      <BooksGallery books={books} totalCount={totalCount} loadMore30={loadMore30} />
    </>
  );
};
