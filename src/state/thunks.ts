import { ThunkAction } from "redux-thunk";
import { RootStateType } from "state/store";
import {
  BooksReducerType,
  clearBooksAC,
  finishLoadingAC,
  getBooksAC,
  getBooksRequestAC,
  setErrorAC,
} from "state/actions";
import { BooksApi } from "api/api";
import { BookType } from "state/types";

export const fetchBooks = (): ThunkAction<void, RootStateType, unknown, BooksReducerType> => (dispatch, getState) => {
  const state = getState();
  const { books, searchInput, startIndex, sortBy, category, totalCount } = state;

  dispatch(getBooksRequestAC());

  BooksApi.getBooks(searchInput, startIndex, sortBy, category)
    .then((res) => {
      console.log(res);
      if (res && res.data) {
        const uniqueBooks = res.data.items.filter(
          (book: BookType, index: number, self: any[]) => index === self.findIndex((t: BookType) => t.id === book.id),
        );
        dispatch(getBooksAC(uniqueBooks, res.data.totalItems));
      } else {
        dispatch(setErrorAC("Empty response or missing data"));
      }
    })
    .catch((err) => {
      if (searchInput === "") {
        dispatch(setErrorAC("Title is required"));
      } else if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
        dispatch(setErrorAC(err.response.data.error.message));
      } else {
        dispatch(setErrorAC("An error has occurred. Try entering a different book"));
        dispatch(clearBooksAC(books, totalCount));
      }
    })
    .finally(() => dispatch(finishLoadingAC()));
};
