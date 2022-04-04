import styled from "styled-components";

export const ToolBoxStyles = styled.div`
  display: grid;
  place-items: center;
  gap: 10vmin;
  width: 100%;
  .tools {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto 1fr;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    width: clamp(280px, 70%, 1200px);
    overflow: hidden;
    .tools-nav {
      display: grid;
      height: 100%;
      backdrop-filter: blur(10px);
      grid-template-rows: repeat(3, 1fr);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      button {
        background: rgba(255, 255, 255, 0.2);
        font-size: 20px;
        padding: 15px;
        &.current {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
    .tools-list {
      backdrop-filter: blur(10px);
      height: 100%;
      padding: 15vmin 5vmin;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 15vmin 10vmin;
    }
    @media (max-width: 1200px) {
      grid-template-columns: none;
      grid-template-rows: auto 1fr;
      .tools-nav {
        height: fit-content;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: none;
      }
    }
  }
  .wrapper {
    align-self: center;
    display: grid;
    place-items: center;
    place-content: center;
    width: 15vmin;
    min-width: 80px;
    aspect-ratio: 1/1;
    border-radius: 5vmin;
    position: relative;
    background: transparent;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
    transition: 0.8s;
    &:hover {
      border: none !important;
      .container {
        transform: scale(1.3);
      }
    }
    .container {
      transition: 0.5s;
      border-radius: inherit;
      position: absolute;
      width: 90%;
      height: 90%;
      mix-blend-mode: color;
      z-index: 2;
      overflow: hidden;
      display: flex;
      justify-content: center;
      box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3);

      img {
        position: absolute;
        width: 45%;
        aspect-ratio: 1/1;
        top: 10%;
        z-index: 20;
        z-index: 4;
        border-radius: 5px;
        object-fit: cover;
      }
      &:after {
        z-index: 2;
        left: 0;
        overflow: hidden;
        position: absolute;
        content: "";
        width: 110%;
        height: 110%;
        border-radius: 40%;
        background-color: hsla(180, 100%, 100%, 0.5);
        bottom: 40%;
        z-index: 1;
        animation: rotate 5s linear infinite;
        animation-delay: 3s;
      }
      &:before {
        z-index: 2;
        left: 0;
        position: absolute;
        content: "";
        width: 110%;
        height: 110%;
        border-radius: 45%;
        background-color: white;
        bottom: 46%;
        animation: rotate 5s linear infinite;
      }
      @keyframes rotate {
        from {
          transform: rotateZ(0);
        }
        to {
          transform: rotateZ(360deg);
        }
      }
    }

    span {
      position: absolute;
      top: 110%;
      h4 {
        font-size: 15px;
        width: max-content;
      }
    }
  }
`;
