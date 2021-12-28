import * as React from "react";

import BackgroundAnim from "../components/BackgroundAnim";
import Hero from "../components/Hero";
import HoverAnim from "../components/HoverAnim";
import Services from "../components/Services";
import ToolBox from "../components/ToolBox";

const IndexPage = () => (
  <div>
    <BackgroundAnim />

    <Hero />
    <Services />
    <ToolBox />
    <Hero />
  </div>
);

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default IndexPage;
