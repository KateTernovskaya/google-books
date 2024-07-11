import { BookType, categoriesString, sortByString } from "state/types";

export const getBooksAC = (books: BookType[], totalCount: number) => {
  return {
    type: "GET-BOOKS",
    payload: {
      books,
      totalCount,
    },
  } as const;
};
export const searchBooksAC = (searchTitle: string) => {
  return {
    type: "SEARCH-BOOKS",
    payload: { searchTitle },
  } as const;
};
export const setCategoryAC = (category: categoriesString) => {
  return {
    type: "SET-CATEGORY",
    payload: { category },
  } as const;
};
export const setSortAC = (sortBy: sortByString) => {
  return {
    type: "SET-SORT",
    payload: { sortBy },
  } as const;
};
export const loadMoreAC = () => {
  return { type: "LOAD-MORE" } as const;
};
export const setErrorAC = (error: string | null) => {
  return {
    type: "SET-ERROR",
    payload: { error },
  } as const;
};

export const clearBooksAC = (books: BookType[], totalCount: number) => {
  return {
    type: "CLEAR-BOOKS-ARR",
    payload: {
      books,
      totalCount,
    },
  } as const;
};

export const loadingAC = (loading: boolean) => {
  return {
    type: "LOADING-BOOKS",
    payload: { loading },
  } as const;
};

type GetBooksAC = ReturnType<typeof getBooksAC>;
type SearchBooksAC = ReturnType<typeof searchBooksAC>;
type SetCategoryAC = ReturnType<typeof setCategoryAC>;
type SetSortAC = ReturnType<typeof setSortAC>;
type LoadMoreAC = ReturnType<typeof loadMoreAC>;
type SetErrorAC = ReturnType<typeof setErrorAC>;
type ClearBooksAC = ReturnType<typeof clearBooksAC>;
type LoadingAC = ReturnType<typeof loadingAC>;

export type BooksReducerType =
  | GetBooksAC
  | SearchBooksAC
  | SetCategoryAC
  | SetSortAC
  | LoadMoreAC
  | SetErrorAC
  | ClearBooksAC
  | LoadingAC;
