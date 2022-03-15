import React from "react";
import { ToolBoxStyles } from "../styles/ToolBoxStyles";
import Img from "../assets/images/tools.png";
const ToolBox = () => {
  return (
    <div className="page">
      <ToolBoxStyles className="border-area">
        <div className="title">
          <h3 className="gradient">
            What's in my <br /> toolbox ?!
          </h3>
          <p>Some of the awesome technologies I love to work with</p>

          <button className="btn">
            <span>Details</span>
          </button>
        </div>

        <div className="image">
          <img src={Img} alt="Technologies" />
        </div>
      </ToolBoxStyles>
    </div>
  );
};

export default ToolBox;
