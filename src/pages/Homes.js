import React from 'react';
import '../App.css';
import HeroSection from '../Components/HeroSection';
import Cards from '../Components/Cards'
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards /> 
      <Footer />
    </>
  );
}

export default Home;
