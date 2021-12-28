import React from "react";
import styled from "styled-components";

const MenuBarStyles = styled.div`
  right: 3vw;
  z-index: 11;
  transform: scale(0.6);
  .line {
    height: 8px;
    width: 45px;
    background: #fff;
    margin: 5px auto;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
`;

const MenuBar = ({ menuBarRef }) => {
  return (
    <MenuBarStyles ref={menuBarRef}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </MenuBarStyles>
  );
};

export default MenuBar;
