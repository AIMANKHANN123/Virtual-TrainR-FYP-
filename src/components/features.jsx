import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h2 className="section-title">Features</h2>
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 col-md-3 mb-4">
                  <i className={`${d.icon} mb-3`} style={{ fontSize: "2.5rem" }}></i>
                  <h5>{d.title}</h5>
                  <p className="small">{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
