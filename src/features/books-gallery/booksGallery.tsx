import React from 'react';
import Photo from 'assets/photo_2023-11-24_20-13-22.jpg'
import {BookItem} from "features/books-gallery/book-item";
import s from '../books-gallery/books.module.css'
import {categoriesString} from "App";

export type Book = {
    id: string;
    authors: string;
    name: string;
    photo: string;
    category: categoriesString;
};
const booksArr: Book[] = [
    {
        id: '1',
        photo: Photo,
        category: 'art',
        name: 'Две короны',
        authors: 'Наталья Жильцова'
    },
    {
        id: '2',
        photo: Photo,
        category: 'biography',
        name: 'Две короны. Турнир',
        authors: 'Наталья Жильцова'
    },
    {
        id: '3',
        photo: Photo,
        category: 'computers',
        name: 'Две короны',
        authors: 'Светлана Ушакова'
    },
    {
        id: '4',
        photo: Photo,
        category: 'history',
        name: 'Две короны. Турнир;',
        authors: 'Светлана Ушакова'
    },
    {
        id: '5',
        photo: Photo,
        category: 'medical',
        name: 't6jkl;',
        authors: 'ftbhth hsthrt'
    },
    {
        id: '6',
        photo: Photo,
        category: 'poetry',
        name: 't6jkl;',
        authors: 'ftbhth hsthrt'
    },
]
type BooksGalleryProps = {
    category: categoriesString;
};

export const BooksGallery = ({ category }:BooksGalleryProps ) => {

    const filteredBooks = category === 'all'
        ? booksArr
        : booksArr.filter(book => category === book.category);


    const books = filteredBooks.map((book) => (
        <BookItem
            key={book.id}
            id={book.id}
            authors={book.authors}
            name={book.name}
            photo={book.photo}
            category={book.category}
        />
    ))

    return (
        <div className={s.container}>
            <h3>Found {filteredBooks.length} {filteredBooks.length<2 ? 'book': 'books'} </h3>
            <div className={s.booksGallery} >
                {books}
            </div>
        </div>
    );
};