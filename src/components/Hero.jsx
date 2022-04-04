import React from "react";
import ReactTyped from "react-typed";
import img from "../assets/images/Group 1.svg";

import { HeroStyles } from "../styles/HeroStyles";
import Header from "./Header";
import Letter from "./Letter";

const Hero = () => {
  const myName = ["Hy!", "I", "am", "br", "H", "M", "Shuvo"];

  return (
    <div className="page">
      <HeroStyles className="border-area ">
        <div className="page-title">
          <div className="title">
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
            <p className="styled">
              I make websites that are{" "}
              <span className="typed">
                <ReactTyped
                  strings={["Fast ⚡", "Secured 🔐", "Cool 😍"]}
                  typeSpeed={100}
                  backSpeed={40}
                  loop={true}
                />
              </span>
            </p>

            <a href="#contact" class="btn">
              <span>Hire Me !</span>
            </a>
          </div>
          <img src={img} className="image-3d" />
        </div>

        <span className="badge"></span>
        <Header />
      </HeroStyles>
    </div>
  );
};

export default Hero;
