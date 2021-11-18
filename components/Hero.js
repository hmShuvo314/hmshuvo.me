import React from "react";
import ReactTyped from "react-typed";
import {
  HeroRightStyles,
  HeroStyles,
  HeroTitleStyles,
} from "../styles/HeroStyles";
import { FaCodepen, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Hero = () => {
  return (
    <HeroStyles className="page">
      <HeroTitleStyles>
        <h1>
          Hy! I Am
          <br />H M Shuvo
        </h1>

        <p>
          I make websites that are{" "}
          <span className="typed">
            <ReactTyped
              strings={["Blazing Fast ⚡", "Secured 🔐", "Cool 😍"]}
              typeSpeed={100}
              backSpeed={40}
              loop={true}
              color={"rgb(197, 18, 54)"}
            />
          </span>
        </p>

        <button class="btn">
          <span>Hire Me !</span>
        </button>
      </HeroTitleStyles>
      <span className="badge"></span>
      <HeroRightStyles>
        <ul>
          <li>
            {" "}
            <a href="#" className="linkedin">
              <FaLinkedin />
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="github">
              <ImGithub />
            </a>
          </li>

          <li>
            {" "}
            <a href="#" className="github">
              <FaCodepen />
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="twitter">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </HeroRightStyles>
    </HeroStyles>
  );
};

export default Hero;
