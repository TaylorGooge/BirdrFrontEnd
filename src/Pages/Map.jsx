import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import TabbedMapNav from '../Components/Map/TabbedMapNav';
import MappDemo from '../Components/Map/MappDemo';
import Footer from '../Components/Footer/Footer';

export default function Mappage() {
  return (
    <div>
      <NavBar />
      <MappDemo />
      <Footer />
    </div>
  );
}