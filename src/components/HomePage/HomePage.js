import React from 'react';
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
      <h2>Que tal adotar um gatinho?</h2>

      {/* Carrossel */}
      <Slider {...settings}>
        <div>
          <img src="img/cat1.jpg" alt="Gatinho 1" width={600} height={332} />
        </div>
        <div>
          <img src="img/cat2.jpg" alt="Gatinho 2" width={600} height={332} />
        </div>
        <div>
          <img src="img/cat3.jpg" alt="Gatinho 3" width={600} height={332} />
        </div>
        <div>
          <img src="img/cat4.jpg" alt="Gatinho 4" width={600} height={332} />
        </div>
      </Slider>

    </div>
  );
};

export default HomePage;
