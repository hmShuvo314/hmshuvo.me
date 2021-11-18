import styled from "styled-components";
export const ServicesStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const ServicesTitleStyles = styled.div`
  display: grid;
  justify-items: flex-start;
  gap: 2vmin;
  h3 {
    font-weight: 800 !important;
    color: var(--black);
    font-size: 11vmin;
    line-height: 11vmin;
    background: url("https://wallpaperaccess.com/full/1523270.jpg");
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;
  }
  p {
    font-size: 4vmin;
    font-style: italic;
    line-height: 5vmin;
    font-weight: 700;
    letter-spacing: 0.6vmin;
    color: var(--black);
    text-shadow: 3px 3px 2px wheat;
    font-family: Pacifico, -apple-system, BlinkMacSystemFont;
  }
  button {
    font-size: 3.5vmin;
    span {
      padding: 0.5vmin 3vmin;
    }
  }
`;

export const ServicesGroupStyles = styled.div`
  display: grid;
`;
