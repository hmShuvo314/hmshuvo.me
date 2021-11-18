import * as React from "react";

import BackgroundAnim from "../components/BackgroundAnim";
import Hero from "../components/Hero";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Services from "../components/Services";
import ToolBox from "../components/ToolBox";

const IndexPage = () => (
  <div>
    <BackgroundAnim />
    <Typography />
    <GlobalStyles />

    <Hero />
    <Services />
    <ToolBox />
    <Hero />
  </div>
);

export default IndexPage;
