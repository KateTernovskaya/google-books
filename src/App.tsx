import React from 'react';
import './App.css';
import {BookPage} from "features/bookPage/bookPage";
import {Main} from "features/main/main";
import {Route, Routes} from "react-router-dom";

export type categoriesString = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/book/:id" element={<BookPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
