import React, { useEffect, useRef } from "react";
import { NavStyles } from "../styles/NavStyles";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import Link from "next/link";
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
      <div ref={navRef} className="items">
        <ul>
          <li>
            <Link href="/">
              <FcHome />
            </Link>
            <h5>Home</h5>
          </li>
          <li>
            <Link href="/projects">
              <FcComboChart />
            </Link>
            <h5>Project</h5>
          </li>
          <li>
            <Link href="/services">
              <FcServices />
            </Link>
            <h5>Service</h5>
          </li>
          <li>
            <Link href="/blogs">
              <FcReading />
            </Link>
            <h5>Blogs</h5>
          </li>
          <li>
            <Link href="/about">
              <FcAbout />
            </Link>
            <h5>About</h5>
          </li>
        </ul>
      </div>
    </NavStyles>
  );
};

export default Nav;
