import React from "react";
const ProfileMenu = (props) => {
  return (
    <nav className="nav justify-content-center mb-5 nav-pills">
      <a href="/profile"className= {props.active === 'profile'? 'nav-link active': 'nav-link'}>
        <i className="bx bx-user-circle me-2"></i>My profile
      </a>
      {/* <a href="/profile-settings" className= {props.active === 'settings'? 'nav-link active': 'nav-link'}>
        <i className="bx bx-cog me-2"></i>Settings
      </a> */}
      <a href="/tracking-history" className= {props.active === 'tracking'? 'nav-link active': 'nav-link'}>
        <i className="bx bx-layer me-2"></i>Tracking History
      </a>
    </nav>
  );
};
export default ProfileMenu;