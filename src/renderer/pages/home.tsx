/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import Navbar from '../components/Navbar';
import ImageCarousel from '../components/home/ImageCarousel';
import NationalParks from '../components/home/NationalParks';
import Footer from '../components/Footer';
import TrailsNearYou from '../components/home/TrailsNearYou';

interface HomeProps {
  isLoggedIn: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <ReactTyped
        className="typed"
        strings={[
          '<strong>Get out and start exploring</strong>',
          '<strong>Find new places</strong>',
          '<strong>Checkout Hiking and Camping</strong>',
          '<strong>Book a stay through us!</strong>',
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className="carousel-div mb-5">
        <ImageCarousel />
      </div>
      <div className="national-parks">
        <NationalParks />
        <TrailsNearYou />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
