import React, { useState } from "react";
import { ToolBoxStyles } from "../styles/ToolBoxStyles";
import tools from "../assets/images/tools.png";
import js from "../assets/images/js.png";
import ts from "../assets/images/ts.png";
import react from "../assets/images/react.webp";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import next from "../assets/images/next.png";
import gatsby from "../assets/images/gatsby.png";
import graph from "../assets/images/graph.png";
import mongo from "../assets/images/mongo.png";
import firebase from "../assets/images/firebase.png";
import vscode from "../assets/images/vscode.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import npm from "../assets/images/npm.png";
import vite from "../assets/images/vite.png";
import python from "../assets/images/python.png";
import stylec from "../assets/images/stylec.png";

const ToolBox = () => {
  const allToolsSet = {
    Frontend: [
      { name: "JavaScript", icon: js, color: "hsl(53, 93%, 48%)" },
      { name: "TypeScript", icon: ts, color: "#2d79c7" },
      { name: "React JS", icon: react, color: "#00d8fe" },
      { name: "HTML", icon: html, color: "#f66b39" },
      { name: "CSS", icon: css, color: "#2263ae" },
      { name: "SCSS", icon: sass, color: "#c6548c" },
      { name: "Styled Components", icon: stylec, color: "#EBA16D" },
    ],
    Backend: [
      { name: "Node JS", icon: node, color: "hsl( 130, 60%, 45%)" },
      { name: "Express JS", icon: express, color: "hsl(0, 10%, 10%)" },
      { name: "Next JS", icon: next, color: "hsl(0, 80%, 0%)" },
      { name: "Gatsby JS", icon: gatsby, color: "hsl(270, 50%, 40%)" },
      { name: "Python", icon: python, color: "#3876A9" },
      { name: "GraphQL", icon: graph, color: "#f642aa" },
      { name: "MongoDB", icon: mongo, color: "hsl(115, 50%, 45%)" },
      { name: "Firebase", icon: firebase, color: "#ffca28" },
    ],

    Others: [
      { name: "VS Code", icon: vscode, color: "#279FF0" },
      { name: "Git", icon: git, color: "#f05033" },
      { name: "Github", icon: github, color: "#000" },
      { name: "NPM", icon: npm, color: "#cc3b3a" },
      { name: "Vite", icon: vite, color: "#a552fe" },
    ],
  };
  const allToolsList = ["Frontend", "Backend", "Others"];

  const [displayTools, setDisplayTools] = useState("Frontend");

  return (
    <div className="page" id="Toolbox">
      <ToolBoxStyles className="border-area">
        <div className="page-title">
          <div className="title">
            <h3 className="gradient">
              What's in my <br /> toolbox ?!
            </h3>
            <p className="styled">
              Some of the awesome technologies I love to work with
            </p>
          </div>

          <img className="image-3d" src={tools} alt="" />
        </div>

        <div className="tools">
          <div className="tools-nav">
            {allToolsList.map((toolSet) => (
              <button
                className={toolSet === displayTools ? "current" : ""}
                onClick={() => setDisplayTools(toolSet)}
              >
                {toolSet}
              </button>
            ))}
          </div>

          <div className="tools-list">
            {allToolsSet[displayTools].map(({ name, color, icon }) => (
              <div className="wrapper" style={{ border: `3px solid ${color}` }}>
                <div
                  className="container"
                  style={{ backgroundColor: `${color}` }}
                >
                  <img src={icon} alt={name} />
                </div>
                <span>
                  <h4>{name}</h4>
                </span>
              </div>
            ))}
          </div>
        </div>
      </ToolBoxStyles>
    </div>
  );
};

export default ToolBox;
