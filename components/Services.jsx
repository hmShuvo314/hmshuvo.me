import React from "react";
import {
  ServicesGroupStyles,
  ServicesStyles,
  ServicesTitleStyles,
} from "../styles/ServicesStyles";

const Services = () => {
  return (
    <ServicesStyles className="page">
      <ServicesTitleStyles>
        <h3>
          My awesome
          <br />
          Services
        </h3>
        <p>I always strive to deliver the best user experience!</p>
        <button className="btn">
          <span>Resume</span>
        </button>
      </ServicesTitleStyles>
      <ServicesGroupStyles>
        {/* <div className="single-service">
          <h4>Fast & Secure</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            deserunt!
          </p>
        </div> */}
      </ServicesGroupStyles>
    </ServicesStyles>
  );
};

export default Services;
