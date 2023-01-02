import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Resources</h1>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="item">
          <h1> Quick Links</h1>
          <span>Eduman Login</span>
          <span>Portal Login</span>
          <span>Partner Login</span>
          <span>Website Demo</span>
          <span>Tutorials</span>
          <span></span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Invidunt dolores dolores sit voluptua vero magna magna sit, voluptua
            ea amet accusam diam et diam, eirmod clita dolores magna.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            my name vidunt dolores dolores sit voluptua vero magna magna sit,
            voluptua ea amet accusam diam et diam, eirmod clita dolores magna.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">EdumanBD</span>
          <span className="copyright">
            © 1993-2023 License, Legal Line, a Federal Not-for-profit
            Corporation. All rights reserved.
          </span>
        </div>
        <div className="right">
          <span> <img src="/img/images.jpg" alt="" /></span>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
