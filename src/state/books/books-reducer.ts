import { BooksState } from "state/types";
import { BooksReducerType } from "state/books/books-actions";

const initialState: BooksState = {
  books: [],
  searchInput: "",
  totalCount: 0,
  startIndex: 0,
  sortBy: "relevance",
  category: "All",
  loading: false,
  error: null,
};
export const booksReducer = (state = initialState, action: BooksReducerType): BooksState => {
  switch (action.type) {
    case "GET-BOOKS": {
      return {
        ...state,
        books: state.startIndex === 0 ? action.payload.books : [...state.books, ...action.payload.books],
        totalCount: action.payload.totalCount,
        loading: false,
      };
    }
    case "SEARCH-BOOKS": {
      return { ...state, searchInput: action.payload.searchTitle, startIndex: 0 };
    }
    case "SET-CATEGORY": {
      return { ...state, category: action.payload.category, startIndex: 0 };
    }
    case "SET-SORT": {
      return { ...state, sortBy: action.payload.sortBy, startIndex: 0 };
    }
    case "LOAD-MORE": {
      return { ...state, startIndex: state.startIndex + 30 };
    }
    case "SET-ERROR": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "CLEAR-BOOKS-ARR": {
      return { ...state, books: [], totalCount: 0 };
    }
    case "LOADING-BOOKS": {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};
