import React, { useState } from "react";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import firebase from "../assets/images/firebase.png";
import gatsby from "../assets/images/gatsby.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import graph from "../assets/images/graph.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import mongo from "../assets/images/mongo.png";
import next from "../assets/images/next.png";
import node from "../assets/images/node.png";
import npm from "../assets/images/npm.png";
import python from "../assets/images/python.png";
import react from "../assets/images/react.webp";
import sass from "../assets/images/sass.png";
import tools from "../assets/images/tools.png";
import ts from "../assets/images/ts.png";
import vite from "../assets/images/vite.png";
import vscode from "../assets/images/vscode.png";
import { ToolBoxStyles } from "../styles/ToolBoxStyles";

const allToolsSet = {
  Frontend: [
    { name: "JavaScript", icon: js, color: "hsl(53, 93%, 48%)" },
    { name: "TypeScript", icon: ts, color: "#2d79c7" },
    { name: "React JS", icon: react, color: "#00d8fe" },
    {
      name: "React Native",
      icon: "https://www.vhv.rs/dpng/d/200-2007563_react-native-logo-png-transparent-png.png",
      color: "#05A5D1",
    },
    {
      name: "Tauri",
      icon: "https://seeklogo.com/images/T/tauri-logo-39352BD5A1-seeklogo.com.png",
      color: "#FEC130",
    },
    { name: "Next JS", icon: next, color: "hsl(0, 80%, 0%)" },
    { name: "Gatsby JS", icon: gatsby, color: "hsl(270, 50%, 40%)" },
    { name: "HTML", icon: html, color: "#f66b39" },
    { name: "CSS", icon: css, color: "#2263ae" },
    { name: "SCSS", icon: sass, color: "#c6548c" },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      color: "#01B7D6",
    },
  ],
  Backend: [
    { name: "Node JS", icon: node, color: "hsl( 130, 60%, 45%)" },
    { name: "Express JS", icon: express, color: "hsl(0, 10%, 10%)" },
    {
      name: "Nest JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png",
      color: "#E01E4C",
    },
    {
      name: "Prisma",
      icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256746/file-type-light-prisma-icon-sm.png",
      color: "#0A3146",
    },
    { name: "GraphQL", icon: graph, color: "#f642aa" },
    {
      name: "PostgreSQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      color: "#2E6692",
    },
    { name: "MongoDB", icon: mongo, color: "hsl(115, 50%, 45%)" },
    { name: "Firebase", icon: firebase, color: "#ffca28" },
    { name: "Python", icon: python, color: "#3876A9" },
    {
      name: "AWS",
      icon: "https://w7.pngwing.com/pngs/147/242/png-transparent-amazon-com-logo-amazon-web-services-amazon-elastic-compute-cloud-amazon-virtual-private-cloud-cloud-computing-text-orange-logo.png",
      color: "#FF9B01",
    },
  ],

  Others: [
    { name: "VS Code", icon: vscode, color: "#279FF0" },
    { name: "Git", icon: git, color: "#f05033" },
    { name: "Github", icon: github, color: "#000" },
    { name: "NPM", icon: npm, color: "#cc3b3a" },
    { name: "Vite", icon: vite, color: "#a552fe" },
  ],
};
const ToolBox = () => {
  const allToolsList = ["Frontend", "Backend", "Others"];

  const [displayTools, setDisplayTools] = useState("Frontend");

  return (
    <div className="page" id="toolbox">
      <ToolBoxStyles className="border-area">
        <div className="page-title">
          <div className="title">
            <h3 className="gradient">What's in my toolbox</h3>
            <p className="styled ">
              Some of the awesome technologies I love to work with
            </p>
          </div>

          <img className="image-3d" src={tools} alt="" />
        </div>

        <div className="tools">
          <div className="tools-nav">
            {allToolsList.map((toolSet) => (
              <button
                className={
                  toolSet === displayTools ? "current font-semibold" : ""
                }
                onClick={() => setDisplayTools(toolSet)}
              >
                {toolSet}
              </button>
            ))}
          </div>

          <div className="tools-list">
            {allToolsSet[displayTools].map(({ name, color, icon }) => (
              <div
                className="wrapper"
                key={name}
                style={{ border: `3px solid ${color}` }}
              >
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
