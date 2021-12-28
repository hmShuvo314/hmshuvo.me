import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: absolute;
  /* border: 2px solid red; */
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3vw;
  top: 5%;
  left: 5%;
  .icon {
    font-size: 5vmin;
    color: white;
    z-index: 99;
  }
`;
