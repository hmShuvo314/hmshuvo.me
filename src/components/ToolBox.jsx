import React, { useState } from "react";
import { ToolBoxStyles } from "../styles/ToolBoxStyles";
import tools from "../assets/images/tools.png";
const ToolBox = () => {
  const allToolsSet = {
    Frontend: [
      {
        name: "JavaScript",
        icon: "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
        color: "hsl(53, 93%, 48%)",
      },
      {
        name: "TypeScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
        color: "#2d79c7",
      },
      {
        name: "React JS",
        icon: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",
        color: "#00d8fe",
      },
      {
        name: "HTML",
        icon: "https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png",
        color: "#f66b39",
      },
      {
        name: "CSS",
        icon: "https://banner2.cleanpng.com/20190409/ioc/kisspng-cascading-style-sheets-logo-css3-html-javascript-5cac98c601a161.7443571115548151740067.jpg",
        color: "#2263ae",
      },
      {
        name: "SCSS",
        icon: "https://banner2.cleanpng.com/20180815/xbk/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0de6192.1715579115343725129109.jpg",
        color: "#c6548c",
      },
    ],
    Backend: [
      {
        name: "Node JS",
        icon: "https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg",
        color: "hsl( 130, 60%, 45%)",
      },
      {
        name: "Express JS",
        icon: "https://camo.githubusercontent.com/97d0a6e43d5635a95918b239346676fa9e85bd3ecbf1664b2cd122f85d5a3756/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d68747470732533412532462532467777772e6d656d656e746f746563682e696e253246617373657473253246696d6167657325324669636f6e73253246657870726573732e706e6726663d31266e6f66623d31",
        color: "hsl(0, 10%, 10%)",
      },
      {
        name: "Next JS",
        icon: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
        color: "hsl(0, 80%, 0%)",
      },
      {
        name: "Gatsby JS",
        icon: "https://www.fermicoding.com/sites/default/files/2021-08/G%20js.png",
        color: "hsl(270, 50%, 40%)",
      },
      {
        name: "GraphQL",
        icon: "https://www.pngitem.com/pimgs/m/275-2750540_apollo-graphql-logo-hd-png-download.png",
        color: "#f642aa",
      },

      {
        name: "MongoDB",
        icon: "https://www.kindpng.com/picc/m/385-3850482_mongodb-logo-png-transparent-png.png",
        color: "hsl(115, 50%, 45%)",
      },
      {
        name: "Firebase",
        icon: "https://spng.subpng.com/20180417/irq/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3cde70706.9853526815239628299463.jpg",
        color: "#ffca28",
      },
    ],

    Others: [
      {
        name: "VS Code",
        icon: "https://code.visualstudio.com/assets/branding/app-icon.png",
        color: "#279FF0",
      },
      {
        name: "Git",
        icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        color: "#f05033",
      },
      {
        name: "Github",
        icon: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png",
        color: "#000",
      },
      {
        name: "NPM",
        icon: "https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png",
        color: "#cc3b3a",
      },
      {
        name: "Vite",
        icon: "https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667",
        color: "#a552fe",
      },
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
