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
    background: url("https://wallup.net/wp-content/uploads/2016/01/153880-abstract-colorful-748x468.jpg");
    -webkit-background-clip: text;
    letter-spacing: 1vmin;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;
  }
  p {
    letter-spacing: 0.8vmin;
    color: var(--black);
    text-shadow: 3px 3px 2px wheat;
  }
`;

export const ServicesGroupStyles = styled.div`
  display: grid;
`;
