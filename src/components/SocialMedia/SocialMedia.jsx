import React from "react";
import "./SocialMedia.css"; // Include the CSS below
import pic from "../../assets/pic.webp";

export const SocialMediaSection = () => {
  return (
    <section id="contact" className="social-section" >
      <div className="social-image">
        <img src={pic} alt="Chicken pulling fish" />
      </div>
      <h2 className="social-title">Follow us on Social Media</h2>
      <p className="social-subtitle">Stay up-to-date with the latest in Virtual TrainR</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-facebook-f"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
      </div>
      <div className="bottom-footer">
        <div className="footer-info">
        <div className='text-center p-3'style={{marginLeft:'480px',marginTop:'40px',color:'black' ,fontFamily:'sans-serif'}}>
        © 2025 Copyright:
        <a className='text-black' href='https://www.instagram.com/virtualtrainr?igsh=MzY3dzA0enludzl0'>
          VirtualTrainR.com
        </a>
      </div>
        </div>
      </div>
    </section>
  );
};
