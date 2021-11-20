import styled from "styled-components";

export const NavStyles = styled.nav`
  /* border: 2px solid white;
  border-radius: 0% 100% 0% 100% / 0% 0% 100% 100%; */
  top: 0%;
  position: absolute;
  right: 0;
  width: 33vmin;
  height: 33vmin;
  .menu__item--hamburger {
    position: absolute;
    top: 10%;
    right: 18%;
    z-index: 11;
    transform: scale(0.6);
    .line {
      height: 8px;
      width: 45px;
      background: #fff;
      margin: 5px auto;
      transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
  .showMenu {
    .line:nth-child(1) {
      transform: rotate(45deg) translate(10px, 10px);
      transform-origin: center;
    }
    .line:nth-child(2) {
      visibility: hidden;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) translate(8px, -10px);
      transform-origin: center;
    }
  }

  .items {
    transform: scale(0);
    transform-origin: right top;
    opacity: 0;
    transition: 0.4s;
    a {
      z-index: 99;
    }

    li {
      font-size: 4.5vmin;
      display: grid;
      place-content: center;
      place-items: center;
      background-color: whitesmoke;
      width: 8.2vmin;
      height: 8.2vmin;
      border-radius: 50%;
      &:nth-child(1) {
        transform: translate(0%, 0%);
      }
      &:nth-child(2) {
        transform: translate(30%, 5%);
      }
      &:nth-child(3) {
        transform: translate(100%, -5%);
      }
      &:nth-child(4) {
        transform: translate(190%, -30%);
      }
      &:nth-child(5) {
        transform: translate(300%, -100%);
      }
      h5 {
        color: black;
        font-size: 2vmin;
        font-family: mako, apple-system, inkMacSystemFont;
      }
    }
  }
  .showMenu {
    transform: scale(1);
    transition: 0.4s;
    opacity: 1;
  }
`;
