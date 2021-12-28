import gsap from "gsap";
import React, { useEffect } from "react";
import styled from "styled-components";

const HoverAnimStyles = styled.div`
  .shapes {
    position: relative;
    height: 100vh;
    width: 100vw;
    background: transparent;
    overflow: hidden;
  }

  .shape {
    will-change: transform;
    position: absolute;
    border-radius: 50%;
  }

  .shape-1 {
    background-color: #005ffe;
    width: 30rem;
    height: 30rem;
    margin: -15rem 0 0 -15rem;
  }
  .shape-2 {
    background-color: #ffe5e3;
    width: 20rem;
    height: 20rem;
    margin: -10rem 0 0 -10rem;
  }
  .shape-3 {
    background-color: #ffcc57;
    width: 10rem;
    height: 10rem;
    margin: -5rem 0 0 -5rem;
  }

  .content {
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    background: #fff;
    mix-blend-mode: screen;
  }
  h1 {
    /* @include rf(100, 200); */

    color: green;
    margin: 0;
    text-align: center;
    background: url("https://wallpapercave.com/wp/wp3850859.jpg");
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;
  }
`;

const HoverAnim = ({ text }) => {
  useEffect(() => {
    const animate = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    };
    document.body.addEventListener("mousemove", animate);
    return () => document.body.removeEventListener("mousemove", animate);
  }, []);
  return (
    <HoverAnimStyles>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="content">
        <h1>{text}</h1>
      </div>
    </HoverAnimStyles>
  );
};

export default HoverAnim;
