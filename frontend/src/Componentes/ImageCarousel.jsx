// src/components/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// Importa las imágenes
import carrusel1 from '../imagenes/carrusel1.jpg';
import carrusel2 from '../imagenes/carrusel2.jpg';
import carrusel3 from '../imagenes/carrusel3.jpg';

// Estilos personalizados
const CarouselContainer = styled.div`
  width: 100%; /* Ajusta el ancho según tus necesidades */
  margin: auto;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 400px; /* Ajusta la altura según tus necesidades */
  object-fit: cover; /* Mantiene la proporción y cubre el área */
`;

const ImageCarousel = () => {
  const images = [carrusel1, carrusel2, carrusel3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <CarouselImage src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;
