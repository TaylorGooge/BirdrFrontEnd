import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileSettings1 from "./ProfileSettings1";
import ProfileSettings2 from "./ProfileSettings2";
import Preloader from "../../Preloader/Preloader";

const ProfileSettings = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <main className="main-content" id="main-content">
      <ProfileSettings1 />
      <ProfileSettings2 />
    </main>
   
  );
};
export default ProfileSettings;