import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const allLinks = ["Services", "Toolbox", "Projects", "Contact"];
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <span className="title">
        <h1>
          Shuvo <span>Portfolio</span>
        </h1>
      </span>
      <nav>
        <button className="menu">
          <GiHamburgerMenu onClick={() => setToggle((prev) => !prev)} />
        </button>
        <ul className={toggle ? "open" : ""}>
          {allLinks.map((link, i) => (
            <li>
              <a key={i} href={`/#${link.toLowerCase()}`}>
                <h5>{link}</h5>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
