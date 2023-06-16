import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<BookList />}>
            {/* <Route exact path="/book" element= /> */}
          </Route>
          
          <Route exact path="/book/:id" element={<BookDetails />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

