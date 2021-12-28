import React from "react";
import ReactTyped from "react-typed";
import {
  HeroRightStyles,
  HeroStyles,
  HeroTitleStyles,
} from "../styles/HeroStyles";
import { FaCodepen, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import Nav from "./Nav";
import Header from "./Header";
import HoverAnim from "./HoverAnim";

const Hero = () => {
  return (
    <HeroStyles className="page">
      <HeroTitleStyles>
        <h1>Hy! I Am</h1>
        <h1>H M Shuvo</h1>

        <p>
          I make websites that are{" "}
          <span className="typed">
            <ReactTyped
              strings={["Blazing Fast ⚡", "Secured 🔐", "Cool 😍"]}
              typeSpeed={100}
              backSpeed={40}
              loop={true}
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
            <a href="#" className="linkedin">
              <FaLinkedin />
            </a>
            <p>Linkedin</p>
          </li>
          <li>
            <a href="#" className="github">
              <ImGithub />
            </a>
            <p>Github</p>
          </li>

          <li>
            <a href="#" className="github">
              <FaCodepen />
            </a>
            <p>Github</p>
          </li>
          <li>
            <a href="#" className="twitter">
              <FaTwitter />
            </a>
            <p>Twitter</p>
          </li>
        </ul>
      </HeroRightStyles>
      <Header />
    </HeroStyles>
  );
};

export default Hero;
