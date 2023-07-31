import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function UserInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [profileFallbackSrc, setProfileFallbackSrc] = useState('https://birdr-app.s3.amazonaws.com/public/profileFallback.png');
  const handleImageError = () => {
    setProfileFallbackSrc('https://birdr-app.s3.amazonaws.com/public/profileFallback.png');
  };
  const onError = () => {
    user.picture = 'https://birdr-app.s3.amazonaws.com/public/profileFallback.png';
    
  }
  return (
    <div className="nav-item me-3 me-lg-0 dropdown">
                        <a href="#" className="btn btn-secondary rounded-pill py-0 ps-0 pe-3"
                            data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <img src={user.picture} alt="" className="avatar sm rounded-circle me-1" onError={onError}/>
                            <small>{user.name}</small>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-xs p-0">
                            <a href="/profile" className="dropdown-header border-bottom p-4">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={user.picture} alt=""
                                          className="avatar xl rounded-pill me-3" 
                                          onError={handleImageError}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-0">{user.name} </h5>
                                        <span className="text-muted d-block mb-2">{user.email}</span>
                                        <div className="small d-inline-block link-underline fw-semibold text-muted">View
                                            account</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="dropdown-item p-3">
                                <span className="d-block text-end">
                                    <i className="bx bx-box-arrow-right"></i>
                                    Sign Out
                                </span>
                            </a>
                        </div>
                    </div>

     
  );
}
