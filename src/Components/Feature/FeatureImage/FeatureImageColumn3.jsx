import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
export default function FeatureImage3() {
  const { loginWithRedirect } = useAuth0();
  return (
      <div className="col-lg-5 order-lg-last position-relative">
      <div className="d-flex align-items-center mb-3" data-aos="fade-up">
        <div className="border-top border-warning width-3x border-2"></div>
        <h6 className="mb-0 ms-3 text-muted">The process</h6>
      </div>
      <h2 className="display-5 me-lg-n9 mb-4" data-aos="fade-down">
        How does Birdr work?
      </h2>
      <p className="w-lg-75 mb-5" data-aos="fade-down" data-aos-delay="100">
        Start birdwatching for free today
      </p>
      <ul className="step mx-3 mx-sm-0 list-unstyled mb-0">
        <li className="step-item" data-aos="fade-up">
          <div className="step-row">
            <span className="step-icon bg-primary bg-opacity-10 text-primary">
              {/*ICON-DOT*/}
              <b>01</b>
            </span>
            <div className="step-content">
              <h6 className="mb-1">Create an account</h6>
              <p className="mb-0">
                Create a free account <a href="#" onClick={() => loginWithRedirect()} >here</a>.
              </p>
            </div>
          </div>
        </li>
        {/*/.step-item*/}
        {/*/.step-item*/}
      </ul>
    </div>
                          
  );
}