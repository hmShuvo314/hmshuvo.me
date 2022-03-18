import React from "react";

const Header = () => {
  const allLinks = ["Home", "Services", "Toolbox", "Project", "About"];
  return (
    <header>
      <span className="title">
        <h1>
          Shuvo <span>Portfolio</span>
        </h1>
      </span>
      <nav>
        <ul>
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
