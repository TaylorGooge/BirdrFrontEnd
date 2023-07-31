import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileBreadcrumb from "./ProfileBreadcrumb";
import ProfileMenu from "./ProfileMenu";


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <main className="main-content" id="main-content">
    <section className="position-relative bg-white border-bottom">
        <div className="container position-relative py-9">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ProfileBreadcrumb active={'profile'}/>
                </div>
            </div>

        </div>
    </section>
    <section className="position-relative">
        <div className="container position-relative">
            <div className="">
                <div className="position-relative pt-9 pb-9 pb-lg-11">
                    <div className="row">
                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="mt-lg-n14 position-relative z-index-1">
                                <div className="card shadow p-3">
                                    <div>
                                        <div className="width-15x height-15x mb-5 rounded-circle shadow bg-no-repat overflow-hidden bg-contain"
                                            style={{backgroundImage: 'url({user.picture}), url(https://birdr-app.s3.amazonaws.com/public/profileFallback.png'}}>
                                        </div>
                                        <h4 className="mb-2">{user.name}</h4>
                                        <small className="d-block mb-3"></small>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="d-flex flex-column">
                               <ProfileMenu active = {'profile'}/>

                                <div className="h-100">
                                    <h5 className="mb-4">Profile Details</h5>
                                    <div className="row align-items-center">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Name</label>
                                            <div className="form-control">{user.name}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email address</label>
                                            <div className="form-control">{user.email}
                                            </div>
                                        </div>
                                    </div>
                                  <div className="row align-items-center">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">User Nick Name</label>
                                            <div className="form-control">{user.nickname}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email Verified</label>
                                            <div className="form-control">{user.email_verified && 'Yes'} {!user.email_verified && "No"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
    )
        
  );
};

export default Profile;