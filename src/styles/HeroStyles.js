import styled from "styled-components";
import img from "../assets/images/badge.png";
import bg from "../assets/images/gradient-bg.webp";

export const HeroStyles = styled.div`
  height: fit-content;
  align-items: center;

  .badge {
    position: absolute;
    width: 30vmin;
    height: 25vmin;
    background: url(${img}) center no-repeat;
    background-size: contain;
    bottom: 0;
    right: 0;
  }
  header {
    position: absolute;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    padding: 0 5vmin;

    .title {
      h1 {
        font-family: Ubuntu, -Arial, Helvetica, sans-serif;
        font-size: 4vmin;
        color: whitesmoke;
        span {
          color: rgb(197, 18, 54);
        }
      }
    }

    nav {
      top: 0%;
      position: relative;
      right: 0;
      width: fit-content;
      height: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          font-size: 4.5vmin;
          display: grid;
          place-content: center;
          place-items: center;
          width: 8.2vmin;
          height: 8.2vmin;
          border-radius: 50%;
          h5 {
            color: black;
            font-size: 2vmin;
            color: white;

            font-family: mako, apple-system, inkMacSystemFont;
          }
        }
      }
    }
  }

  .page-title .title {
    display: grid;
    justify-items: flex-start;
    gap: 2vmin;
    position: relative;
    align-items: center;
    align-self: center;
    width: 50%;
    @media (max-width: 1100px) {
      width: 100%;
    }
    h1 {
      font-size: 10vmin;
      letter-spacing: 0.3vmin;
      span {
        display: inline-block;
        background-clip: text;
        -webkit-background-clip: text;
        &.hover {
          color: yellowgreen;
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
      font-size: clamp(12px, 3.5vmin, 3.5vmin);
      letter-spacing: 0.3vmin;
      color: wheat;
      font-family: Pacifico;
    }

    .typed {
      color: rgb(197, 18, 54);
    }
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
  width: 50%;
  @media (max-width: 1100px) {
    width: 100%;
  }
  h1 {
    font-size: 10vmin;
    letter-spacing: 0.3vmin;
    font-display: swap;
    span {
      display: inline-block;
      background-clip: text;
      -webkit-background-clip: text;
      &.hover {
        color: yellowgreen;
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
    font-size: clamp(12px, 3.5vmin, 3.5vmin);
    letter-spacing: 0.3vmin;
    color: wheat;
    font-family: Pacifico;
  }

  .typed {
    color: rgb(197, 18, 54);
  }
`;
