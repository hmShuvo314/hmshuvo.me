import About from "./components/About";
import BackgroundAnim from "./components/BackgroundAnim";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import ToolBox from "./components/ToolBox";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";

const App = () => (
  <>
    <GlobalStyles />
    <Typography />
    <BackgroundAnim />
    <Hero />
    <Services />
    <ToolBox />
    <Projects />
    <About />
  </>
);

export default App;
