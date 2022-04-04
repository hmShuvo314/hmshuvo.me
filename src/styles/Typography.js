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
    /* font-style: italic; */
    font-weight: normal;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont;
    font-family: "Lobster", cursive;
    line-height: normal;
    font-size: clamp(18px, 4.2vmin, 4.2vmin) !important;
    letter-spacing: 0.3vmin;
    color: wheat !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
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
