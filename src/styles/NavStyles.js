import styled from "styled-components";

export const NavStyles = styled.nav`
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
      /* &:nth-child(1) {
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
      } */
      h5 {
        color: black;
        font-size: 2vmin;
        color: white;

        font-family: mako, apple-system, inkMacSystemFont;
      }
    }
  }
`;
