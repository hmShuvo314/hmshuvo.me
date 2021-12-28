import { createGlobalStyle } from "styled-components";
import cursor from "../public/icons/cursor.png";
import pointer from "../public/icons/pointer.png";
const GlobalStyles = createGlobalStyle`
  :root {
    --red: #c51236;
    --black: #242d49;
    --yellow: #fca61f;
    --white: #fff;
    --grey: #efefef;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {

    font-size: 10px;
    scroll-behavior: smooth !important;
  }

  body {
    overflow-x: hidden;
    cursor: url(${cursor.src}) , default !important;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* button {
    position: relative;
    background: linear-gradient( #fdbf05, #fb9731  );
    box-shadow: .3rem .3rem .5rem 0 rgba(0,0,0,.2);
    color: #242d49;
    border: 0;
    font-weight: 900;

    &:before{
      position: absolute;
      content: '';
      height: 1px;
      width: 1px;
      box-shadow: 0 0 5rem 1.5rem #fdbf05;
      z-index: -1;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      top: 100%;
      left: 50%;
    }
    &:hover {
      cursor: url(${pointer}), default !important;
    }
    letter-spacing: 0.1vmin;
    font-size: 2vmin;
    padding: 0.7vmin 2vmin;
    font-weight: 900;
    border-radius: 2vmin;
    font-family: mako, -apple-system, BlinkMacSystemFont;
  } */
 button, a:hover{
    cursor: url(${pointer.src}), default !important;
  }


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
    border-radius: 5rem;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb
 {
    background-color: var(--red) ;
    border: 3px solid var(--white);
    border-radius: 5rem;
  }


  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .page {
  position:relative;

  height: 100vh;
  width: 100vw;
  padding: 0rem clamp(2rem, 8vw, 20rem);
  z-index: 299;


  filter: drop-shadow(.7vmin .7vmin 2px rgba(0, 0, 0, 0.5));
  &::after{
    content: ' ';
      position:absolute;
      background: red;
      height:20vmin;
      width: 20vmin;
      left: 5%;
      bottom: 5%;
      background: linear-gradient(to right top, #7da9b3 0, #d2f1fb 65%, #025364);
      clip-path: polygon(-50% -50%, 150% 150%, 150% -50%);
      border-top-right-radius: 1.5rem;
      box-shadow: 0 0px 15px 4px #112429;
      opacity: .35;
      display: inline-block;

    }

    &::before{
      position: absolute;
      content: '';
      left: 5%;
      top: 5%;
      height: 90%;
      width: 90%;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.1);
      background: linear-gradient(45deg, transparent, 14.1421356237vmin, rgba(255, 255, 255, 0.1) 0);
      box-shadow: 0px 0px 3px 2px rgb(0 0 0 / 10%);
      z-index: -1;
      backdrop-filter: blur(2px);
      clip-path: polygon(-20% -20%, 120% -20%, 120% 120%, 20vmin  100%, 0% calc( 100% - 20vmin));
  }

}


  .btn {
    font-family: "Pacifico", sans-serif;
    background: transparent;
    outline: none !important;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    padding: 0;
    border: none;
    color: #f8d47d;
    letter-spacing: 0.2vmin;
    font-size: 3.5vmin;
    font-weight: 700;
  }
  .btn span {
    padding: .5vmin 3vmin;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .btn:before,
  .btn:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #f8d47d;
    transition: all 0.3s ease;
  }
  .btn:before {
    height: 50%;
    width: 3px;
  }
  .btn:after {
    width: 20%;
    height: 3px;
  }
  .btn:hover:before {
    height: 100%;
  }
  .btn:hover:after {
    width: 100%;
  }
  .btn span:before,
  .btn span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #f8d47d;
    transition: all 0.3s ease;
  }
  .btn span:before {
    width: 3px;
    height: 50%;
  }
  .btn span:after {
    width: 20%;
    height: 3px;
  }
  .btn span:hover:before {
    height: 100%;
  }
  .btn span:hover:after {
    width: 100%;
  }


`;

export default GlobalStyles;
