import React, {useEffect} from 'react';
import Photo from 'assets/photo_2023-11-24_20-13-22.jpg'
import {BookItem} from "features/books-gallery/book-item";
import s from '../books-gallery/books.module.css'
import {Button} from "@mui/material";
import {GoTopBtn} from "components/goToTop";

// export type Book = {
//     id: string;
//     authors: string;
//     name: string;
//     photo: string;
//     category: categoriesString;
// };

type BooksGalleryProps = {
    category: any;
    books: any
    totalCount: any
    searchInput: any
    loadMore30: ()=> void
};

type Book = {
    id: string;
    volumeInfo: {
        authors?: string[];
        title?: string;
        imageLinks?: {
            smallThumbnail: string;
        };
        categories?: string[];
    };
};

export const BooksGallery = ({
                                 category,
                                 books,
                                 searchInput,
                                 totalCount,
                                 loadMore30
                             }: BooksGalleryProps) => {


    // const filteredBooks = category === 'all'
    //     ? booksArr
    //     : booksArr.filter(book => category === book.category);

    const filteredBooks = category === 'all'
        ? books
        : books.filter((book: Book) => book.volumeInfo.categories === category);

    // const books = filteredBooks.map((book) => (
    //     <BookItem
    //         key={book.id}
    //         id={book.id}
    //         authors={book.authors}
    //         name={book.name}
    //         photo={book.photo}
    //         category={book.category}
    //     />
    // ))
    const booksMap = filteredBooks.map((book: any) => (
        <BookItem
            item={book}
            key={book.id}
            id={book.id}
            authors={book.volumeInfo.authors ? book.volumeInfo.authors : ''}
            title={book.volumeInfo.title ? book.volumeInfo.title : ''}
            photo={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : Photo}
            category={book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
        />
    ))


    return (
        <div className={s.container}>
            {/*<h3>Found {filteredBooks.length} {filteredBooks.length<2 ? 'book': 'books'} </h3>*/}
            <h3>Found {totalCount} {books.length < 2 ? 'book' : 'books'} </h3>
            <div className={s.booksGallery}>
                {booksMap}
            </div>
            <div className={s.buttons}>
                <Button variant="contained" onClick={loadMore30}>Load
                    more</Button>
                <GoTopBtn/>
            </div>
        </div>
    );
};