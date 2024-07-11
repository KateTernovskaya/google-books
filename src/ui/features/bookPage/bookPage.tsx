import React, { useEffect, useState } from "react";
import Photo from "ui/assets/imgStub.jpg";
import s from "ui/features/bookPage/bookPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { BooksApi } from "api/api";
import { SuperButton } from "ui/components/buttons/superButton";
import { BookType } from "state/types";
import { loadingAC, setErrorAC } from "state/books/books-actions";
import { useAppDispatch } from "state/store";

export const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/");

  const fetchDetailBook = () => {
    dispatch(loadingAC(true));
    dispatch(setErrorAC(null));
    BooksApi.getDetailBook(id)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        dispatch(setErrorAC("Error fetching book details"));
        console.error("Error fetching book details:", error);
      })
      .finally(() => dispatch(loadingAC(false)));
  };

  useEffect(() => {
    fetchDetailBook();
  }, [id]);

  if (!book) {
    return;
  }

  return (
    <div className={s.bookPage}>
      <SuperButton title="Back" onClick={handleBackClick} />
      <div className={s.bookImg}>
        <img
          src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : Photo}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className={s.bookInfo}>
        <span className={s.category}>{book.volumeInfo.categories}</span>
        <span className={s.name}>{book.volumeInfo.title}</span>
        <span className={s.authors}>{book.volumeInfo.authors?.join(", ")}</span>
        <p className={s.description} dangerouslySetInnerHTML={{ __html: book.volumeInfo.description ?? "" }}></p>
      </div>
    </div>
  );
};
