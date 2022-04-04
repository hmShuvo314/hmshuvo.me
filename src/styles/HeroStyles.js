import styled from "styled-components";
import img from "../assets/images/badge.png";

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
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    padding: 0 5vmin;

    .title {
      h1 {
        font-family: Ubuntu, -Arial, Helvetica, sans-serif;
        font-size: clamp(20px, 4vmin, 4vmin);
        color: whitesmoke;
        span {
          color: rgb(197, 18, 54);
        }
      }
    }

    nav {
      position: relative;
      width: fit-content;
      height: 100%;
      align-items: center;
      display: flex;
      .menu {
        position: absolute;
        display: none;
        right: 0;
        color: aliceblue;
        font-size: 30px;
        background-color: transparent;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        position: absolute;
        top: 0;
        right: 0;
        li {
          display: grid;
          place-content: center;
          place-items: center;
          width: 8.2vmin;
          height: 8.2vmin;
          border-radius: 50%;
          margin: 0 auto;
          h5 {
            color: black;
            font-size: clamp(15px, 2.5vmin, 2.5vmin);
            color: white;
            font-family: mako, apple-system, inkMacSystemFont;
            position: relative;
            padding: 10px;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
            &:after {
              position: absolute;
              content: "";
              bottom: 0;
              left: 0;
              width: 100%;
              height: 3px;
              transition: 0.4s;
              background-color: wheat;
              transform: scale(0);
            }
            &:hover {
              &:after {
                transform: scale(1);
              }
            }
          }
        }
      }
      @media (max-width: 800px) {
        .menu {
          display: block;
        }
        ul {
          top: 100%;
          background-color: rgba(255, 255, 255, 0.3);
          padding: 25px;
          border-radius: 5px;
          display: grid;
          transform: scale(0);
          transform-origin: top right;
          transition: 0.4s;

          &.open {
            transform: scale(1);
          }
        }
      }
    }
  }

  .page-title .title {
    display: grid;
    justify-items: flex-start;
    gap: 20px;
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
    .typed {
      color: rgb(197, 18, 54);
    }
  }
  position: relative;
`;
