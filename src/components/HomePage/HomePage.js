import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import './HomePage.css'; // Estilo do carrossel


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    
    <div>
      <h1>Bem-vindo à Página Inicial</h1>

      {/* Carrossel */}
      <Slider {...settings}>
        <div>
          <img src="../public/img/cat1.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="imagem2.jpg" alt="Imagem 2" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>

    </div>
  );
};

export default HomePage;
