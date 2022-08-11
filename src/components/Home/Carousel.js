import React from "react";
import IMG from "../imgs/banner1.jpg";
import '../style/carousel.css'

const Carousel = () => {
  return (
    
    <div>
      
      <div
  
  id="carouselExampleControls"
  className="carousel slide mt-5"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active img">
    <img src="https://i.ibb.co/fMvwgQx/16275.jpg"  className="d-block w-100 img" alt="16275" border="0"/>
    </div>
    <div className="carousel-item img">
    <img src="https://i.ibb.co/pwxc6QY/banner.jpg" className="d-block w-100 img" alt="banner" border="0"/>
    </div>
    <div className="carousel-item img">
    <img src={IMG}  className="d-block w-100 img" alt="SL-052621-43270-34" border="0"/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Carousel;
