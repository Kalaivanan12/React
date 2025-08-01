import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
  const logos = [
    { src: './public/br1.png', alt: 'Hyundai'},
    { src: './public/br2.png', alt: 'Dish' },
    { src: './public/br3.png', alt: 'Acer' },
    { src: './public/br4.png', alt: 'HSBC' },
    { src: './public/br5.png', alt: 'CNN' },
    { src: './public/br6.png', alt: 'Honda' }
  ];

  return (
    <section className="brand-logos">
      <div className="brand-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
