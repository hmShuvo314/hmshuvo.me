import styled from "styled-components";

export const NavStyles = styled.nav`
  /* border: 2px solid white; */
  top: 0%;
  position: absolute;
  right: 0;
  width: 33vmin;
  height: 33vmin;

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
      width: 8.2vmin;
      height: 8.2vmin;
      border-radius: 50%;
      /* box-shadow: inset 0 0 3vmin 0 rgba(255, 255, 255, 1); */
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
        color: white;

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
