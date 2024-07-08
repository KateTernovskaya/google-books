import React, { useEffect, useState } from "react";
import Photo from "../../assets/photo_2023-11-24_20-13-22.jpg";
import s from "./bookPage.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { apiKey, baseUrl } from "api/common.api";
import { SuperButton } from "components/buttons/superButton";
import { Book } from "components/types";
import { ProgressLinear } from "components/progress/progressLinear";

export const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  const navigate = useNavigate();
  const handleBackClick = () => navigate("/");

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}?key=${apiKey}`)
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
        <span className={s.category}>{book.volumeInfo.categories}</span>
        <span className={s.name}>{book.volumeInfo.title}</span>
        <span className={s.authors}>{book.volumeInfo.authors?.join(", ")}</span>
        <p className={s.description} dangerouslySetInnerHTML={{ __html: book.volumeInfo.description ?? "" }}></p>
      </div>
    </div>
  );
};
