import React, { useEffect, useRef, useState } from "react";
import { HeaderStyles } from "../styles/HeaderStyles";
import { ImCross, ImMenu } from "react-icons/im";
import Nav from "./Nav";
import Tittle from "./Tittle";
import MenuBar from "./MenuBar";

const Header = () => {
  const menuBarRef = useRef();
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navRef.current.classList.toggle("showMenu");
  };

  console.log(isMenuOpen);
  return (
    <HeaderStyles>
      <Tittle />
      {/* <MenuBar menuBarRef={menuBarRef} /> */}
      <div className="icon" onClick={showMenu}>
        {isMenuOpen ? <ImCross /> : <ImMenu />}
      </div>
      <Nav navRef={navRef} />
    </HeaderStyles>
  );
};

export default Header;
