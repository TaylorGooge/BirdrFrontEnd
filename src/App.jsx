import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Home';
import Mappage from './Pages/Map';
import Aboutpage from './Pages/About';
import Contactpage from './Pages/Contact';
import Profilepage from './Pages/Profile';
import ProfileSettingspage from "./Pages/ProfileSettings";
import TrackingHistoryPage from "./Pages/TrackingHistory";
import { AuthenticationGuard } from "./Components/AuthGuard/AuthenticationGuard";

export default function App() {
  return (
       <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/map" element={<AuthenticationGuard component={Mappage} />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/profile" element={<AuthenticationGuard component={Profilepage} />} />
            <Route path="/login" element={<AuthenticationGuard />} />
            {/* <Route path="/profile-settings" element={<AuthenticationGuard component={ProfileSettingspage} />} /> */}
            <Route path="/tracking-history" element={<AuthenticationGuard component={TrackingHistoryPage} />} />
            <Route path="/support" element={<Contactpage />} />
          </Routes>
      </Router>
  )
}