import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/Fattern.otf";
import bg from "../assets/images/gradient-bg.webp";

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Fattern";
    src:  url(${font}) ;
    font-display: swap;
  }
  html {
    font-family: "Inter", sans-serif !important;
    color: var(--black);
  }

  p.styled {
    font-weight: normal;
    font-family: "Lobster", cursive !important;
    line-height: normal;
    font-size: clamp(18px, 4vmin, 4vmin) !important;
    letter-spacing: 0.3vmin;
    color: wheat !important;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
  h1,h2,h3 {
    &.gradient {
      font-family: "Fattern", Arial, Helvetica, sans-serif !important;
      position: relative;
      background: url(${bg}), #fda912;
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
