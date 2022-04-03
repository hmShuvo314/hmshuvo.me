import styled from "styled-components";
export const AboutStyles = styled.div`
  .image-3d {
    place-items: center;
    display: grid;
    border: 2px solid aliceblue;
    box-shadow: 12px 12px 5px 0 blueviolet, -12px -12px 5px 0 cyan;
    border-radius: 10px;
    perspective: 600px;
    width: fit-content;
    padding: 50px;

    img {
      border-radius: 10px;
      transform: rotateY(20deg);
    }
  }

  .title {
    p {
      /* font-family: Arial, Helvetica, sans-serif; */
      /* line-height: normal; */
      /* color: aliceblue; */
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
      /* font-size: clamp(12px, 3vmin, 25px); */
    }
  }
`;
