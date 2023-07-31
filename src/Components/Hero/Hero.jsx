import React from 'react';
import './Hero.css';
export default function Hero() {
  return (
    
    <section className="position-relative">
      <div className="container-fluid position-relative z-index-1">
        <div className="position-relative rounded-4 overflow-hidden bg-dark">
          <div className="hero">
            <img src="img/hero.jpg" alt="Hero Image" className="img-fluid" />
            <div className="overlay">
              <h1 className="display-4">Birdr</h1>
              <p className="lead">Join the flock </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}