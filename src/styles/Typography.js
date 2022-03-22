import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/gradient-bg.webp";
import font from "../assets/fonts/Fattern.otf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Fattern";
    src:  url(${font}) ;
    font-display: swap;
  }
  html {
    font-family: Mako,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p.styled {
    font-style: italic;
    font-weight: normal;
    font-family: Pacifico, -apple-system, BlinkMacSystemFont;
    line-height: normal;
    font-size: clamp(14px, 4vmin, 4vmin);
      letter-spacing: 0.3vmin;
  }
  h1,h2,h3 {
    &.gradient {
      font-family: "Fattern", Arial, Helvetica, sans-serif !important;
      position: relative;
      background: url(${bg});
      animation: anim 12s alternate infinite;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-size: 65vmax;
      font-size: 10vmin;
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
