import React from "react";
import dropper from "../assets/animation/dropper.gif";
import flask from "../assets/animation/flask.gif";

export const About = (props) => {
  return (
    <div id="about" className="py-5">
      <div className="container">
        <div className="row">
          {/* Left Column - Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img 
              src="img/about.PNG" 
              className="img-fluid" 
              alt="About Us"style={{height:'400px'}}  />
          </div>

          {/* Right Column - About Text and List */}
          <div className="col-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <img src={dropper} alt="dropper" style={{ width: '60px', height: 'auto', transform:'translate(200px,-90px)' ,borderRadius:'40%'}} />
              <p>{props.data ? props.data.paragraph : "Loading..."}</p>
              <br />

              <h3>Why Choose Us?</h3>
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-3">
                  <ul className="list-unstyled">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12">
                  <ul className="list-unstyled">
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
                <img src={flask} alt="catalyst" style={{ width: '150px', height: '100px', transform:'translate(530px,-25px)',backgroundColor:'#990194' ,borderRadius:'40%'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
};
