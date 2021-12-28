import styled from "styled-components";

export const ToolBoxStyles = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  @media (max-width: 750px) {
    display: grid;
    /* gap: 5rem 0; */
  }
  .title {
    display: grid;
    justify-items: flex-start;
    gap: 3vmin;
    /* border: 2px solid green; */
    /* width: clamp(30rem, 45vw, ) */
  }
  .image {
    /* border: 2px solid green; */
    height: auto;
    width: 60vmin;
    position: relative;
    justify-self: flex-end;
  }
  h3 {
    font-weight: 800 !important;
    color: var(--black);
    font-size: 8vmin;
    letter-spacing: 1vmin;
    background: url("https://cdn.wallpapersafari.com/51/32/AXzc97.jpg");
    background: url("https://wallpapercave.com/wp/wp3850859.jpg");
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;
  }
  p {
    color: black;
    font-family: Pacifico, -apple-system, BlinkMacSystemFont;
  }
`;
