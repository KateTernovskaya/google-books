import React, { useEffect, useState } from "react";
import Photo from "../../assets/photo_2023-11-24_20-13-22.jpg";
import s from "./bookPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { BooksApi } from "api/api";
import { SuperButton } from "components/buttons/superButton";
import { BookType } from "state/types";
import { ProgressLinear } from "components/progress/progressLinear";
import { AlertError } from "components/alertError";
import { useSelector } from "react-redux";
import { RootStateType } from "state/store";

export const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const error = useSelector((state: RootStateType) => state.error);
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/");

  useEffect(() => {
    BooksApi.getDetailBook(id)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  if (!book) {
    return <ProgressLinear />;
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
        {error && <AlertError title={error} />}
        <span className={s.category}>{book.volumeInfo.categories}</span>
        <span className={s.name}>{book.volumeInfo.title}</span>
        <span className={s.authors}>{book.volumeInfo.authors?.join(", ")}</span>
        <p className={s.description} dangerouslySetInnerHTML={{ __html: book.volumeInfo.description ?? "" }}></p>
      </div>
    </div>
  );
};
