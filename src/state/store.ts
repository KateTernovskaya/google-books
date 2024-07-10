import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { booksReducer } from "state/books-reducer";

export const store = createStore(booksReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof booksReducer>;
