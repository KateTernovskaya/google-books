import React from "react";
import { Main } from "ui/features/main/main";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "ui/features/header/header";
import { BookPage } from "ui/features/bookPage/bookPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
