import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/babe1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Babe</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/babe2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>My Boyz</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/babe3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Love</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
