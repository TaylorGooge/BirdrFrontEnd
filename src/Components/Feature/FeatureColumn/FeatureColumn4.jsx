import React from 'react';
export default function FeatureColumn4() {
  return (
    <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="250">
      {/* Card */}
      <div className="card p-4 rounded-4 rounded-top-end-0 rounded-bottom-start-0 hover-lift hover-shadow-xl">
        {/* Feature icon */}
        <div className="width-6x height-6x position-relative flex-center mb-4">
          <svg
            className="position-absolute w-100 text-warning h-100 start-0 top-0"
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
            />
          </svg>
          {/* Icon */}
          <i className="bx bx-bulb position-relative text-white fs-2 lh-1"></i>
        </div>
        {/* Feature title */}
        <div className="mb-2">
          <h5 className="mb-0">Collaborate with other birders</h5>
        </div>
        {/* Feature description */}
        <p className="mb-0">
          Birdr makes it easy to to see what other birders in your area have recorded
        </p>
      </div>
    </div>
  );
}