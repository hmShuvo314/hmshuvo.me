import React from "react";
import styled from "styled-components";

const TittleStyles = styled.div`
  h1 {
    font-family: Ubuntu, -Arial, Helvetica, sans-serif;
    font-size: 4vmin;
    color: whitesmoke;
    span {
      color: rgb(197, 18, 54);
    }
  }
`;

const Tittle = () => {
  return (
    <TittleStyles>
      <h1>
        Shuvo <span>Portfolio</span>
      </h1>
    </TittleStyles>
  );
};

export default Tittle;
