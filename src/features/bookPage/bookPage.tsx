import React, {useEffect, useState} from 'react';
import Photo from '../../assets/photo_2023-11-24_20-13-22.jpg'
import s from './bookPage.module.css'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

export const BookPage = () =>  {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>(null);

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    };

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book details:", error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }


    return (
        <div className={s.bookPage}>
            <Button variant="contained" onClick={handleBackClick}>
                Back
            </Button>
        <div className={s.bookImg}>
                <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : Photo} alt={book.volumeInfo.title}/>

            </div>
            <div className={s.bookInfo}>
                <span className={s.category}>{book.volumeInfo.categories}</span>
                <span className={s.name}>{book.volumeInfo.title}</span>
                <span className={s.authors}>{book.volumeInfo.authors?.join(', ')}</span>
                <p className={s.description} dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}></p>
            </div>
        </div>
    );
};

