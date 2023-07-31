import React from 'react';
import FeatureImageColumn from './FeatureImage/FeatureImageColumn';
import FeatureImageColumn3 from './FeatureImage/FeatureImageColumn3';
export default function FeatureImage() {
  return (
    <section className="position-relative overflow-hidden">
      <div className="container py-9 py-lg-11 position-relative">
        <div className="row align-items-center">
          <FeatureImageColumn/>
          <FeatureImageColumn3 />
        </div>
      </div>
    </section>
  );
}