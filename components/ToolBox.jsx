import React from "react";
import Image from "next/image";
import { ToolBoxStyles } from "../styles/ToolBoxStyles";
import Img from "../public/images/tools.png";
const ToolBox = () => {
  return (
    <ToolBoxStyles className="page">
      <div className="title">
        <h3>
          What's in my <br /> toolbox ?!
        </h3>
        <p>Some of the awesome technologies I love to work with</p>

        <button className="btn">
          <span>Details</span>
        </button>
      </div>

      <div className="image">
        <Image
          placeholder="blur"
          src={Img}
          alt="Technologies"
          layout="responsive"
        />
      </div>
    </ToolBoxStyles>
  );
};

export default ToolBox;
