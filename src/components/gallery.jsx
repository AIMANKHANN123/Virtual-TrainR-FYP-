import { Image } from "./image";
import React from "react";
import microscope from "../assets/animation/microscope.gif"

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center py-5">
      <div className="container">
        <div className="section-title mb-4">
        <img src={microscope} alt="microscope" style={{ width: '60px', height: 'auto', transform:'translate(-110px,55px)' ,borderRadius:'40%'}} />
         
          <h2>Gallery</h2>
          <p>
            Dive into the world of Virtual TrainR through our gallery, showcasing immersive VR science labs, interactive learning experiences, and the future of education.
          </p>
        </div>
        <div className="row g-4">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-12 col-sm-4 col-md-4 col-lg-3"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};
