import React from 'react';
import {Paper} from "@mui/material";
import s from 'features/books-gallery/books.module.css'
import {useNavigate} from "react-router-dom";

export const BookItem = (props: any) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/book/${props.id}`);
    };

    return (
        <Paper className={s.card} id={props.id}
               onClick={handleCardClick}
               sx={{backgroundColor: 'rgba(137, 164, 208, 0.2)'}}>
            <div className={s.cardImg}>
                <img src={props.photo }/>
            </div>
            <div className={s.info}>
                <span className={s.name}>{props.title}</span>
                <span className={s.author}>{props.authors}</span>
                <span className={s.category} >{props.category}</span>
            </div>
        </Paper>
    );
};

