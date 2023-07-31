import React from 'react';
export default function FeatureColumn3() {
  return (
    <div className="col-md-6 col-xl-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
      <div className="card p-4 rounded-4 rounded-top-end-0 rounded-bottom-start-0 hover-lift hover-shadow-xl">
        <div className="width-6x height-6x position-relative flex-center mb-4">
          <svg
            className="position-absolute w-100 text-success h-100 start-0 top-0"
            preserveAspectRatio="none"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.896 10.6995C50.8574 -4.17176 75.6287 -3.04345 90.2241 13.2197C104.82 29.4828 103.712 54.7223 87.7507 69.5936L66.0751 89.7887C50.1136 104.66 25.3424 103.532 10.747 87.2686C-3.84845 71.0054 -2.74106 45.766 13.2204 30.8947L34.896 10.6995Z"
              fill="currentColor"
            ></path>
          </svg>
          <i className="bx bx-devices position-relative text-white fs-2 lh-1"></i>
        </div>
        <div className="mb-2">
          <h5 className="mb-0">Mobile friendly</h5>
        </div>
        <p className="mb-0">Birdr is optimized for mobile- so you can track on the go</p>
      </div>
    </div>
  );
}