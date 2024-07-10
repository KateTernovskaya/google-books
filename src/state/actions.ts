import { BookType, categoriesString, sortByString } from "state/types";

export type BooksReducerType =
  | GetBooksRequestAC
  | GetBooksAC
  | SearchBooksAC
  | SetCategoryAC
  | SetSortAC
  | LoadMoreAC
  | SetErrorAC
  | ClearErrorAC
  | FinishLoadingAC
  | ClearBooksgAC;

export const getBooksRequestAC = () => {
  return {
    type: "GET-BOOKS-REQUEST",
  } as const;
};
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
    payload: {
      searchTitle,
    },
  } as const;
};
export const setCategoryAC = (category: categoriesString) => {
  return {
    type: "SET-CATEGORY",
    payload: {
      category,
    },
  } as const;
};
export const setSortAC = (sortBy: sortByString) => {
  return {
    type: "SET-SORT",
    payload: {
      sortBy,
    },
  } as const;
};
export const loadMoreAC = () => {
  return {
    type: "LOAD-MORE",
  } as const;
};
export const setErrorAC = (error: string) => {
  return {
    type: "SET-ERROR",
    payload: {
      error,
    },
  } as const;
};

export const clearErrorAC = () => {
  return {
    type: "CLEAR-ERROR",
  } as const;
};

export const finishLoadingAC = () => {
  return {
    type: "FINISH-LOADING",
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

type GetBooksRequestAC = ReturnType<typeof getBooksRequestAC>;
type GetBooksAC = ReturnType<typeof getBooksAC>;
type SearchBooksAC = ReturnType<typeof searchBooksAC>;
type SetCategoryAC = ReturnType<typeof setCategoryAC>;
type SetSortAC = ReturnType<typeof setSortAC>;
type LoadMoreAC = ReturnType<typeof loadMoreAC>;
type SetErrorAC = ReturnType<typeof setErrorAC>;
type ClearErrorAC = ReturnType<typeof clearErrorAC>;
type FinishLoadingAC = ReturnType<typeof finishLoadingAC>;
type ClearBooksgAC = ReturnType<typeof clearBooksAC>;
