import React from "react";
import "./Partner.scss";

const Partner = () => {
  return (
    <div className="partner">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/img/js4.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            style={{ width: "400vh", height: "50vh" }}
          />
          <div>
            <h1 className="text-5xl font-bold">We Offer You</h1>
            <p className="py-6">
              A great partnership opportunity To build your career as <br /> a
              smart businessman with EDUMAN
            </p>
            <button className="btn btn-primary">Become a partner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
