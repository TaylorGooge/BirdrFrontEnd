import React from 'react';
export default function AboutRow1() {
  return (
    <section className="position-relative bg-primary bg-opacity-10">
      <svg className="position-absolute start-0 bottom-0 text-white" preserveAspectRatio="none" width="100%" height="288" viewBox="0 0 1200 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 144L100 150C200 156 400 168 600 144C800 120 1000 60 1100 30L1200 0V288H1100C1000 288 800 288 600 288C400 288 200 288 100 288H0V144Z" fill="currentColor"/>
      </svg>
      <div className="container pt-14 pb-9 position-relative z-index-1">
        <div className="row pt-lg-5 pb-7 align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="display-2 mb-4">
              Birdr
            </h1>
            <p className="mb-11 mb-lg-14 lead w-lg-75 mx-auto">Your Instinct Is Calling</p>
            <a href="#next" className="text-muted width-8x height-8x shadow bg-white rounded-circle flex-center d-flex text-center mx-auto">
              <div className="link-arrow-bounce">
                <i className="bx bx-down-arrow-alt fs-4"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}