import BackgroundAnim from "./components/BackgroundAnim";
import Hero from "./components/Hero";
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
    <Hero />
  </>
);

export default App;
