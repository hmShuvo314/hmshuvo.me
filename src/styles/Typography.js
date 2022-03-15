import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/gradient-bg.webp";

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Fattern";
     src:  url("../assets/fonts/Fattern.otf") ;
  }
  /* @font-face {
    font-family: "Pacifico";
     src:  url("/fonts/Pacifico.ttf") ;
  }
  @font-face {
    font-family: "Ubuntu";
     src:  url("/fonts/Ubuntu-bold.ttf") ;
  }

  @font-face {
    font-family: "mako";
    src: url("/fonts/Mako-Regular.ttf") ;
  }
  @font-face {
    font-family: "roboto";
    src: url("/fonts/roboto.ttf") ;
  } */
  html {
    font-family:"Fattern",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p.styled {
    font-size: 4.5vmin;
    font-style: italic;
    line-height: 5vmin;
    font-weight: normal;
    letter-spacing: 0.5vmin;
    font-family: Pacifico, -apple-system, BlinkMacSystemFont;
  }
  h1,h2,h3 {
    font-family: "Fattern", Arial, Helvetica, sans-serif;

    &.gradient {
      position: relative;
    background: url(${bg});
    animation: anim 12s alternate infinite;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-size: 65vmax;

    @keyframes anim {
      from {
        background-position: top left;
      }
      to {
        background-position: bottom right;
      }
    }

    }
  }

  a {
    color: var(--black);
    text-decoration: none;
  }
  li {
    list-style: none;
  }

`;

export default Typography;
