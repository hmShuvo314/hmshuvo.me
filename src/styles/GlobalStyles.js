import { createGlobalStyle } from "styled-components";
import cursor from "../assets/icons/cursor.png";
import pointer from "../assets/icons/pointer.png";
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
    cursor: url(${cursor}) , default !important;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }


 button, a:hover{
    cursor: url(${pointer}), default !important;
  }


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 6px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
    border-radius: 5rem;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb
 {
    background-color: var(--red) ;
    border: none;
    border-radius: 5rem;
  }

  img {
    max-width: 100%;
  }

  .page {
  position:relative;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  display: grid;
  padding: 5vmin 3vmin;
  place-items: center;
    .border-area {
      position: relative;
      height: fit-content;
      min-height: 100%;
      width: 100%;
      border-radius: 1rem;
      display: grid;
      padding: 20vmin 5vmin;
      background: transparent;
      background: linear-gradient(45deg, transparent, 14.1421356237vmin, rgba(255, 255, 255, 0.05) 0);
      box-shadow: 0px 0px 3px 2px rgb(0 0 0 / 10%);
      backdrop-filter: blur(2px);
      clip-path: polygon(-20% -20%, 120% -20%, 120% 120%, 20vmin  100%, 0% calc( 100% - 20vmin));
      -webkit-clip-path: polygon(-20% -20%, 120% -20%, 120% 120%, 20vmin  100%, 0% calc( 100% - 20vmin));
        &:after {
        position:absolute;
        content: '';
        height:20vmin;
        width: 20vmin;
        background: linear-gradient(to right top, #7da9b3 0, #d2f1fb 65%, #025364);
        clip-path: polygon(-50% -50%, 150% 150%, 150% -50%);
        -webkit-clip-path: polygon(-50% -50%, 150% 150%, 150% -50%);
        border-top-right-radius: 1.5rem;
        box-shadow: 0 0px 15px 4px #112429;
        opacity: .35;
        bottom: 0;
        left: 0;
      }
  }

}

.page-title {
  display: flex !important;
  gap: 15vmin 5vmin;
  justify-content: space-between;
  align-items: center;


  .title {
    display: grid;
    justify-items: flex-start;
    gap: 2vmin;
    font-size: 7vmin;
    letter-spacing: 0.3vmin;
    line-height: 10vmin;
    position: relative;
    p {
      color: var(--black);
      color: black;
      font-size: clamp(16px, 3.5vmin, 3.5vmin);
    }
  }

  .image-3d {
    position: relative;
    animation: wobble 6s alternate infinite;
    width: 40%;
    /* aspect-ratio: 577/433; */

    @keyframes wobble {
      from {
        transform: translateY(-50px);
      }
      to {
        transform: translateY(0px);
      }
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    .image-3d {
      width: 60%;
      min-width: 280px;
    }
  }
}
button {
  border: none;
  outline: none;
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
