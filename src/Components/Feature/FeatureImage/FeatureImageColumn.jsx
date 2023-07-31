import React from 'react';
import FeatureImageColumn2 from './FeatureImageColumn2';
export default function FeatureImageColumn() {
  return (
    <div className="col-lg-6 col-xl-5 ps-lg-7 ps-5 pb-4 order-lg-last me-lg-auto mb-5 mb-lg-0 position-relative" data-aos="fade-down">
      <div className="bg-pattern text-warning position-absolute w-50 h-50 mb-lg-n4 mb-n2 start-0 bottom-0 rellax" data-rellax-speed="2" data-rellax-percentage=".5"></div>
      <div className="position-relative bg-white rounded-block rounded-bottom-start-0 rounded-top-end-0 shadow-lg overflow-hidden">
        <div className="position-relative bg-white overflow-hidden">
          <svg className="position-absolute start-0 bottom-0 flip-y" width="100%" height="24" preserveAspectRatio="none" viewBox="0 0 1284 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L31.03 14.5833C60.99 29.1667 121.98 58.3333 182.97 62.5C245.03 66.6667 306.02 45.8333 367.01 35.4167C428 25 488.99 25 549.98 37.5C610.97 50 673.03 75 734.02 70.8333C795.01 66.6667 856 33.3333 916.99 31.25C977.98 29.1667 1038.97 58.3333 1101.03 75C1162.02 91.6667 1223.01 95.8333 1252.97 97.9167L1284 100V0H1252.97C1223.01 0 1162.02 0 1101.03 0C1038.97 0 977.98 0 916.99 0C856 0 795.01 0 734.02 0C673.03 0 610.97 0 549.98 0C488.99 0 428 0 367.01 0C306.02 0 245.03 0 182.97 0C121.98 0 60.99 0 31.03 0H0Z" fill="white"/>
      </svg>
      <img src="img/pexels-tina-nord-792416.jpg" className="img-fluid" alt="" />
      <div className="px-4 bg-white position-relative pb-5 pt-4">
        <h5 className="mb-4">Get started today</h5>
        <form>
          <div className="d-grid">
            <a type="button" href="/login" className="btn btn-primary rounded-pill hover-shadow btn-hover-arrow hover-lift">
              <span>Sign Up</span>
            </a>
          </div>
        </form>
      </div>

            
        </div>
      </div>
    </div>
  );
}