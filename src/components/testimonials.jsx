import React from "react";
export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
    
          <h2>Testimonials</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="testimonial-image mb-3">
                        <img 
                          src={d.img} 
                          alt={d.name} 
                          className="img-fluid rounded-circle" 
                          style={{ width: "80px", height: "80px", objectFit: "cover" }} 
                        />
                      </div>
                      <div className="testimonial-content">
                        <p className="mb-3">"{d.text}"</p>
                        <div className="testimonial-meta text-end">
                          - {d.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
