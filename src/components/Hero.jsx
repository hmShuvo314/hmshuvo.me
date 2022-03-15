import React, { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import img from "../assets/images/Group 1.svg";

import { HeroStyles, HeroTitleStyles } from "../styles/HeroStyles";
import Header from "./Header";
import Letter from "./Letter";

const Hero = () => {
  const [rotate, setRotate] = useState(0);
  const [myName, _] = useState(["Hy!", "I", "am", "br", "H", "M", "Shuvo"]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollLength = window.scrollY % window.innerHeight;

  //     const scrollPercentage = (scrollLength / window.innerHeight) * 100;

  //     const rotateAmount = Math.floor(scrollPercentage);
  //     setRotate(rotateAmount);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="page">
      <div className="border-area">
        <HeroStyles>
          <HeroTitleStyles>
            <h1 className="gradient">
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
          <div className="image-3d">
            <div className="image-wrapper">
              <img src={img} />
            </div>
          </div>
          <span className="badge"></span>

          <Header />
        </HeroStyles>
      </div>
    </div>
  );
};

export default Hero;
