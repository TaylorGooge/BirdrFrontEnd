import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu";
import EditProfileForm from "./EditProfileForm";
import EditPasswordForm from "./EditPasswordForm";
const ProfileSettings2 = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <section className="position-relative">
      <div className="container position-relative">
        <div className="overflow-hidden">
          <div className="position-relative pt-5 pb-9 pb-lg-11">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="pt-5 d-flex flex-column h-100">
                  <ProfileMenu active={'settings'} />
                  <div className="card shadow p-3 mb-3">
                    <h5 className="mb-4">Edit profile</h5>
                    <EditProfileForm />
                  </div>
                  <div className="card shadow p-3">
                    <h5 className="mb-4">Update password</h5>
                    <EditPasswordForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfileSettings2;