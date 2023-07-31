import React from "react";
const Preloader = () => {
  return (
    <div className="spinner-loader bg-primary text-white">
      <div className="spinner-grow" role="status">
      </div>
      <span className="small d-block ms-2">Loading...</span>
    </div>
  );
};
export default Preloader;