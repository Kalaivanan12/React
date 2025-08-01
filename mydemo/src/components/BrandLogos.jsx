import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
  const logos = [
    { src: '/assets/br1.png', alt: 'Hyundai' },
    { src: '/assets/br2.png', alt: 'Dish' },
    { src: '/assets/br3.png', alt: 'Acer' },
    { src: '/assets/br4.png', alt: 'HSBC' },
    { src: '/assets/br5.png', alt: 'CNN' },
    { src: '/assets/br6.png', alt: 'Honda' }
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
