// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import CrearUsuario from './Paginas/CrearUsuario';
import Home from './Paginas/Home';
import IniciarSesion from './Paginas/IniciarSesion';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/CrearUsuario" element={<CrearUsuario />} />

         <Route path="/IniciarSesion" element={<IniciarSesion />} />

      </Routes>
    </div>
  );
};

export default App;

