// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ImageCarousel from './Componentes/ImageCarousel';


const Home = () => <div>
</div>;
const CrearUsuario = () => <h2>About Page</h2>;
const IniciarSesion = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CrearUsuario" element={<CrearUsuario />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </div>
  );
};

export default App;

