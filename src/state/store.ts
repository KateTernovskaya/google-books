import { applyMiddleware, legacy_createStore } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { booksReducer } from "state/books/books-reducer";
import { BooksReducerType } from "state/books/books-actions";

export const store = legacy_createStore(booksReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof booksReducer>;
export type AppThunkDispatch = ThunkDispatch<RootStateType, any, BooksReducerType>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
