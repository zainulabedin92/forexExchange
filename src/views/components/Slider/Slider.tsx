import React, { useEffect } from "react";
import "../Slider/Slider.css";

const SliderMulti = () => {
  
  return (
    <div className="slider-container">
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide multi-item-carousel" id="theCarousel">
            <div className="carousel-inner">
              <div className="item active">
                <div className="col-xs-4">
                  <a href="#1">
                    <img
                      src="https://source.unsplash.com/300x300/?perth,australia"
                      className="img-responsive"
                      alt="Slide 1"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-4">
                  <a href="#2">
                    <img
                      src="https://source.unsplash.com/300x300/?fremantle,australia"
                      className="img-responsive"
                      alt="Slide 2"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="col-xs-4">
                  <a href="#3">
                    <img
                      src="https://source.unsplash.com/300x300/?west-australia"
                      className="img-responsive"
                      alt="Slide 3"
                    />
                  </a>
                </div>
              </div>
              {/* Add more slides as needed */}
            </div>
            <a
              className="left carousel-control"
              href="#theCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="glyphicon glyphicon-chevron-left"></i>
            </a>
            <a
              className="right carousel-control"
              href="#theCarousel"
              role="button"
              data-slide="next"
            >
              <i className="glyphicon glyphicon-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderMulti;
