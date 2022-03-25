import styled from "styled-components";
export const ServicesStyles = styled.div`
  height: fit-content;
  position: relative;
  margin-bottom: 15vmin;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));

  img {
    width: 40%;
  }
`;

export const ServicesDetailsStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  align-items: center;
  place-self: center;
  justify-content: center;
  justify-items: center;
  position: relative;
  gap: 8vmin;
  overflow: hidden;
  max-width: 1200px;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
  .services_item {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(20px);
    position: relative;
    display: grid;
    padding: 10px;
    width: clamp(280px, 50vmin, 450px);

    @media (hover: hover) {
      &:hover {
        transform: scale(0.8) translateY(10%);
        .image {
          transform: scale(1.6) translate(10%, -25%);
        }
      }
    }
    transition: 0.6s;
    .image {
      transition: 0.6s;
      position: relative;
      width: 100%;
      display: grid;
      place-items: center;
      img {
        width: 75%;
        border-radius: 10px;
      }
    }
    .details {
      padding: 2vmin;
      font-size: clamp(16px, 2vmin, 2vmin);
      width: 100%;
      display: grid;
      gap: 20px;
      p {
        font-size: 1em;
        font-family: Mako;
      }
      h3 {
        font-size: 1.2em;
        font-family: Ubuntu;
      }
    }
  }
`;
