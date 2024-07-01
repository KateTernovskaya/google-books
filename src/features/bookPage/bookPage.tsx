import React from 'react';
import Photo from '../../assets/photo_2023-11-24_20-13-22.jpg'
import s from './bookPage.module.css'

export const BookPage = () =>  {
    return (
        <div className={s.bookPage}>
        <div className={s.bookImg}>
                <img src={Photo}/>
            </div>
            <div className={s.bookInfo}>
                <span className={s.category}>category</span>
                <span className={s.name}>name</span>
                <span className={s.author}>authors</span>
                <p className={s.description}>description</p>
            </div>
        </div>
    );
};

