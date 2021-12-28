import styled from "styled-components";
import img from "../public/images/badge.png";

export const HeroStyles = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr auto;

  .badge {
    position: absolute;
    width: 30vmin;
    height: 25vmin;
    background: url(${img.src}) center no-repeat;
    background-size: contain;
    bottom: 0%;
    right: 05%;
  }
`;

export const HeroTitleStyles = styled.div`
  display: grid;
  justify-items: flex-start;
  gap: 2vmin;
  position: relative;

  h1 {
    position: relative;
    color: wheat;
    font-size: 9vmin;
    letter-spacing: 0.3vmin;
    background: url("https://wallpapercave.com/wp/wp3850859.jpg");
    /* background: url("https://t4.ftcdn.net/jpg/02/85/23/79/240_F_285237915_dQuWitjr03eReEhkc9q5CZ5z6tmeXuN1.jpg"); */

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: top top;
    background-size: contain;
  }

  p {
    font-weight: 200;
    font-size: 3.5vmin;
    letter-spacing: 0.3vmin;
    color: wheat;
  }

  .typed {
    color: rgb(197, 18, 54);
  }
`;

export const HeroRightStyles = styled.div`
  position: relative;
  ul {
    display: grid;
    gap: 1rem;
    justify-items: end;
  }
  li {
    padding-top: 0.4rem;
    width: auto;
    height: auto;
    transition: all 0.5s;
    p {
      transition: all 0.5s;
      display: none;
      opacity: 0;
    }
    &:hover {
      /* border: 2px solid red; */
      background: white;
      box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0.5);
      border-radius: 20vmin;
      width: 20vmin;
      height: auto;
      display: flex;
      justify-content: space-around;
      transition: all 0.5s;
      a {
        color: black;
      }
      p {
        transition: all 0.5s;
        opacity: 1;
        display: block;
        font-family: mako, -apple-system, BlinkMacSystemFont;
        font-style: normal;
        font-size: 2vmin;
        letter-spacing: 0;
      }
    }
  }

  a {
    color: var(--grey);
    font-size: 4.5vmin;

    transition: all 0.3s ease-in-out;
  }
  .linkedin :hover {
    color: #0e76a8;
    transition: all 0.3s ease-in-out;
  }
  .github :hover {
    color: #171515;
    transition: all 0.3s ease-in-out;
  }
  .twitter :hover {
    color: #00acee;
    transition: all 0.3s ease-in-out;
  }
  display: grid;
`;
