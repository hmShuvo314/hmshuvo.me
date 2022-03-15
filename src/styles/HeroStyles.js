import styled from "styled-components";
import img from "../assets/images/badge.png";
import bg from "../assets/images/gradient-bg.webp";

export const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-content: center;
  place-items: center;
  gap: 15vmin 5vmin;
  height: 100%;

  height: 100%;

  .badge {
    position: absolute;
    width: 30vmin;
    height: 25vmin;
    background: url(${img.src}) center no-repeat;
    background-size: contain;
    bottom: 0%;
    right: 05%;
  }

  position: relative;
`;

export const HeroTitleStyles = styled.div`
  display: grid;
  justify-items: flex-start;
  gap: 2vmin;
  position: relative;
  align-items: center;
  align-self: center;
  h1 {
    font-size: 12vmin;
    letter-spacing: 0.3vmin;
    /* padding: 2vmin; */
    span {
      display: inline-block;
      background: rgba(0, 0, 0, 0.2);
      /* background: rgba(255, 255, 255, 0.1); */
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      &.hover {
        animation: animate 0.3s linear infinite;

        @keyframes animate {
          0% {
            transform: scaleY(0.5) rotateZ(10deg);
          }
          25% {
            transform: scaleY(0.5) scaleX(1.5);
          }
          50% {
            transform: scaleY(1) scaleX(1.5);
          }
          100% {
            transform: scale(1) rotateZ(-10deg);
          }
        }
      }
    }
  }

  p {
    font-weight: 200;
    font-size: 3.5vmin;
    letter-spacing: 0.3vmin;
    color: wheat;
    font-family: Pacifico;
  }

  .typed {
    color: rgb(197, 18, 54);
  }
`;

export const HeroRightStyles = styled.div`
  position: relative;
  ul {
    display: grid;
    gap: 1rem;
    justify-items: end;
  }
  li {
    padding-top: 0.4rem;
    width: auto;
    height: auto;
    transition: all 0.5s;
    p {
      transition: all 0.5s;
      display: none;
      opacity: 0;
    }
    &:hover {
      /* border: 2px solid red; */
      background: white;
      box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0.5);
      border-radius: 20vmin;
      width: 20vmin;
      height: auto;
      display: flex;
      justify-content: space-around;
      transition: all 0.5s;
      a {
        color: black;
      }
      p {
        transition: all 0.5s;
        opacity: 1;
        display: block;
        font-family: mako, -apple-system, BlinkMacSystemFont;
        font-style: normal;
        font-size: 2vmin;
        letter-spacing: 0;
      }
    }
  }

  a {
    color: var(--grey);
    font-size: 4.5vmin;

    transition: all 0.3s ease-in-out;
  }
  .linkedin :hover {
    color: #0e76a8;
    transition: all 0.3s ease-in-out;
  }
  .github :hover {
    color: #171515;
    transition: all 0.3s ease-in-out;
  }
  .twitter :hover {
    color: #00acee;
    transition: all 0.3s ease-in-out;
  }
  display: grid;
`;