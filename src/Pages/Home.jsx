import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Feature from '../Components/Feature/Feature';
import FeatureImage from '../Components/Feature/FeatureImage';

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <main className='main-content' id="main-content" >
        <Hero />
        <Feature />
        <FeatureImage />
      </main>
      <Footer />
    </div>
  );
}