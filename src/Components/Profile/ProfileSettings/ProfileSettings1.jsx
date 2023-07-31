import React from "react";
import ProfileBreadcrumb from "../ProfileBreadcrumb";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileSettings1 = () => {
   const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <section className="position-relative bg-white border-bottom">
        <div className="container position-relative py-9">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ProfileBreadcrumb active={'settings'}/>
                </div>
            </div>

        </div>
      </section>
   
  );
};
export default ProfileSettings1;