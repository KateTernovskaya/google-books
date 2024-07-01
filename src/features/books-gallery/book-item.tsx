import React from 'react';
import {Paper} from "@mui/material";
import s from 'features/books-gallery/books.module.css'
import {Book} from "features/books-gallery/booksGallery";

export const BookItem = ({id, authors, photo, name, category}: Book) => {
    return (
        // <Paper elevation={3} sx={{width: '200px', height: '200px'}}>
        <Paper elevation={3} className={s.card} id={id} sx={{backgroundColor: 'rgba(137, 164, 208, 0.2)'}}>
            <div className={s.cardImg}>
                <img src={photo}/>
            </div>
            <div className={s.info}>
                <span className={s.name}>{name}</span>
                <span className={s.author}>{authors}</span>
                <span className={s.category}>{category}</span>
            </div>
        </Paper>
    );
};

