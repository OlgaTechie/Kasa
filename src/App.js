import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FicheLogement from './pages/FicheLogement/FicheLogement'
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

