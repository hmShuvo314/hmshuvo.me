import React, { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import {
  HeroRightStyles,
  HeroStyles,
  HeroTitleStyles,
} from "../styles/HeroStyles";
import { FaCodepen, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import Header from "./Header";
import Letter from "./Letter";

const Hero = () => {
  const [rotate, setRotate] = useState(0);
  const [myName, _] = useState(["Hy!", "I", "am", "br", "H", "M", "Shuvo"]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollLength = window.scrollY % window.innerHeight;

      const scrollPercentage = (scrollLength / window.innerHeight) * 100;

      const rotateAmount = Math.floor(scrollPercentage);
      setRotate(rotateAmount);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroStyles
      className="page"
      style={{
        transform: `perspective(1500px) rotateX(${-rotate}deg)`,
      }}
    >
      <HeroTitleStyles>
        <h1>
          {myName.map((word, idx) =>
            word === "br" ? (
              <br />
            ) : (
              <>
                {word.split("").map((letter) => (
                  <Letter letter={letter} idx={idx} />
                ))}{" "}
              </>
            )
          )}
        </h1>
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
