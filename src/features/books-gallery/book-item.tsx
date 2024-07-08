import React from "react";
import { Paper } from "@mui/material";
import s from "features/books-gallery/books.module.css";
import { useNavigate } from "react-router-dom";
import Photo from "../../assets/photo_2023-11-24_20-13-22.jpg";
import { Book } from "components/types";

type Props = {
  book: Book;
};

export const BookItem = ({ book }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <Paper
      className={s.card}
      id={book.id}
      onClick={handleCardClick}
      sx={{ backgroundColor: "rgba(137, 164, 208, 0.2)" }}
    >
      <div className={s.cardImg}>
        <img
          src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : Photo}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className={s.info}>
        <span className={s.name}>{book.volumeInfo.title ? book.volumeInfo.title : ""}</span>
        <span className={s.author}>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}</span>
        <span className={s.category}>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : ""}</span>
      </div>
    </Paper>
  );
};
