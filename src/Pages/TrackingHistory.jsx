import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import ProfileSettings from '../Components/Profile/ProfileSettings/ProfileSettings';
import Footer from '../Components/Footer/Footer';
import TrackingHistory from '../Components/Profile/TrackingHistory.js/TrackingHistory';

export default function TrackingHistoryPage() {
  return (
    <div>
      <NavBar />
      <TrackingHistory />
      <Footer />
    </div>
  );
}