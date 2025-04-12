import React from "react";
import testtube from "../assets/animation/testtube.gif";
import tube from "../assets/animation/tube.gif"

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <img src={testtube} alt="test-tube" style={{ width: '60px', height: '50px', transform:'translate(-140px,60px)' ,borderRadius:'40%'}} />
        <img src={tube} alt="tube" style={{ width: '60px', height: '50px', transform:'translate(140px,60px)' ,borderRadius:'40%'}} />
          <h2>Our Services</h2>
          <p>
          At Virtual TrainR, we provide innovative VR-based science education  empowering students and educators for a brighter future in science.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
      
        </div>
      </div>
    </div>
  );
};
