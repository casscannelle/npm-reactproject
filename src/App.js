import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//páginas
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import AnswerPage from './components/AnswerPage/AnswerPage';

const App = () => {
  return(
  <BrowserRouter>
  <div>
    <header>
      <div>
        <h1>KittyKat 🐈</h1> 
      </div>
      <div>
        <nav>
            <Link to="/">Página Inicial</Link>
            <NavLink to="/form">Cadastre-se</NavLink>
            <NavLink to="/answers">Cadastros</NavLink>
        </nav>
      </div>
    </header>
  </div>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/form" element={<FormPage />} />
    <Route path="/answers" element={<AnswerPage />} />
  </Routes>
</BrowserRouter>
);
}

export default App;