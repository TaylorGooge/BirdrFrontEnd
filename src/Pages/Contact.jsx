import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import ContactSection1 from '../Components/Contact/ContactSection1';
import ContactSection2 from '../Components/Contact/ContactSection2';


export default function Contactpage() {
  return (
    <div>
      <NavBar />
      <main className='main-content' id="main-content" >
        <ContactSection1 />
        <ContactSection2 />
       
      </main>
     
      <Footer />
    </div>
  );
}