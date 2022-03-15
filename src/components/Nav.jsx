import React from "react";
import { NavStyles } from "../styles/NavStyles";
import {
  FcReading,
  FcHome,
  FcServices,
  FcComboChart,
  FcAbout,
} from "react-icons/fc";

const Nav = ({ navRef }) => {
  return (
    <NavStyles>
      <ul>
        <li>
          <a href="/">
            {/* <FcHome /> */}
            <h5>Home</h5>
          </a>
        </li>
        <li>
          <a href="/projects">
            {/* <FcComboChart /> */}
            <h5>Project</h5>
          </a>
        </li>
        <li>
          <a href="/services">
            {/* <FcServices /> */}
            <h5>Service</h5>
          </a>
        </li>
        <li>
          <a href="/blogs">
            {/* <FcReading /> */}
            <h5>Blogs</h5>
          </a>
        </li>
        <li>
          <a href="/about">
            {/* <FcAbout /> */}
            <h5>About</h5>
          </a>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
