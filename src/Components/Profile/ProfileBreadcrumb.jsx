import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Preloader from "../Preloader/Preloader";

const ProfileBreadcrumb = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <nav className="d-md-flex justify-content-center" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item active">
          <a href="/">Home</a>
        </li>
        <li className= {props.active == 'profile'  || props.active === 'settings' || props.active == 'tracking' ? 'breadcrumb-item active' : 'breadcrumb-item'}>Profile</li>
        {/* <li className={props.active === 'settings' || props.active === 'tracking'? 'breadcrumb-item active' : 'breadcrumb-item'}>Settings</li> */}
        <li className={props.active === 'tracking' ? 'breadcrumb-item active' : 'breadcrumb-item'}>Tracking</li>
      </ol>
    </nav>
  );
};
export default ProfileBreadcrumb;