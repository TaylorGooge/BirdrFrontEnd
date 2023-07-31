import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import AboutRow1 from '../Components/About/AboutRow1';
import AboutRow2 from '../Components/About/AboutRow2';

export default function Aboutpage() {
  return (
    <div>
      <NavBar />
      <main className='main-content' id="main-content" >
        <AboutRow1 />
        <AboutRow2 />
       
      </main>
     
      <Footer />
    </div>
  );
}