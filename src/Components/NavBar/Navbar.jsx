import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserInfo from './UserInfo';
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
      <header className="z-index-fixed">
      <Navbar expand="lg" className="navbar-light">
        <div className="container-fluid position-relative">
          <a className="navbar-brand" href="/">
            <img src="https://birdr-app.s3.amazonaws.com/public/birdlogo.png" alt="" className="img-fluid" />
          </a>
          <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
            <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i></i>
              </span>
            </button>
            {isAuthenticated && <UserInfo/>}
          </div>
          <div className="collapse navbar-collapse" id="mainNavbarTheme">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">Map</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {isAuthenticated && <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>}
              <li className="nav-item">
                {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </header>
     
  );
}
