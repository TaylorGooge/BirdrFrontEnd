import React from 'react';
export default function AboutRow2() {
  return (
    <section className="position-relative overflow-hidden" id="next">
      <div className="container pb-9 pb-lg-11">
        <div className="row justify-content-lg-around mb-7 mb-lg-9 align-items-center">
          <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-mask">
              <img src="img/instinct.jpeg" className="mask-blob mask-image" alt="" />
            </div>
          </div>
          <div className="col-lg-5 aos-init aos-animate" data-aos="fade-right">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0 display-6">
                You’re out in the splendor of the forest enjoying all that nature has to offer
              </h1>
            </div>
            <p className="mb-4 lead">
              when you hear a chittering behind you, and – purely from instinct – turn to see a marvelous wren flush from its haven. Wouldn’t it be nice to preserve that feeling, and have a way to look back at all the times your instincts were correct?
            </p>
          </div>
        </div>
        <div className="row justify-content-lg-around mb-7 mb-lg-9 align-items-center">
          <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0 order-lg-last aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-mask">
              <img src="img/birdApp.jpeg" className="mask-blob mask-image" alt="" />
            </div>
          </div>
          <div className="col-lg-5 order-md-1 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0 display-6">
                Birdr
              </h1>
            </div>
            <p className="mb-4 lead">
              This app is designed to give you the sense of completion for recording that moment and provides you the digital building blocks for shaping your ornithologists “life list”. You can tag your birds location, add species codes, and keep a list of your sightings all with the push of a button. This app allows you the flexibility of turning your everyday trips into a birding adventure, giving you the satisfaction of compiling your most coveted sightings in one simple, easy to use interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}