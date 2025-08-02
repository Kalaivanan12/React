import React from 'react';
import Header from './components/Header';
import FilterSection from "./components/FilterSection";
import CarouselComponent from './components/CarouselComponent';
import CardGroupComponent from './components/CardGroupComponent';
import FeedbackCards from './components/FeedbackCards';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
       <FilterSection />
        <CardGroupComponent />
         <CarouselComponent />
          <FeedbackCards />
           <BrandLogos />
            <Footer />
             <footer className="text-center py-4">
              <p>&copy; 2024 Car Makes. All rights reserved.</p>
            </footer>
          </div>
  );
}

export default App;
