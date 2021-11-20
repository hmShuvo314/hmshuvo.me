import styled from "styled-components";
import img from "../public/images/badge.png";

export const HeroStyles = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 1fr auto;
  .badge {
    position: absolute;
    width: 35vmin;
    height: 30vmin;
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

  h1 {
    position: relative;
    color: wheat;
    font-size: 13vmin;
    line-height: 14vmin;
    letter-spacing: 0.4vmin;
    background: url("https://wallpapercave.com/wp/wp3850859.jpg");
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;
  }

  p {
    font-weight: 500;
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
    /* gap: 1rem; */
  }
  a {
    color: var(--grey);
    font-size: 5vmin;

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
