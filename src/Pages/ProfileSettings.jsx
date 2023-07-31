import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import ProfileSettings from '../Components/Profile/ProfileSettings/ProfileSettings';
import Footer from '../Components/Footer/Footer';

export default function ProfileSettingspage() {
  return (
    <div>
      <NavBar />
      <ProfileSettings />
      <Footer />
    </div>
  );
}