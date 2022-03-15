import styled from "styled-components";
export const ServicesStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-content: center;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 15vmin;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));

  img {
    width: 70%;
  }

  .title {
    display: grid;
    justify-items: flex-start;
    gap: 2vmin;
    font-size: 7vmin;
    letter-spacing: 0.3vmin;
    line-height: 10vmin;
    width: 100%;
    position: relative;

    p {
      color: var(--black);
      color: black;
      width: 50%;
    }
  }
`;

export const ServicesDetailsStyles = styled.div`
  display: flex;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-content: center;
  justify-items: center;
  position: relative;
  gap: 8vmin;
  padding-bottom: 15vmin;

  .services_item {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(20px);
    position: relative;
    display: grid;
    padding: 10px;
    min-width: 280px;
    &:hover {
      transform: scale(0.8) translateY(10%);
      .image {
        transform: scale(1.6) translate(10%, -25%);
      }
    }
    transition: 0.6s;

    .image {
      transition: 0.6s;
      position: relative;
      width: 100%;
      /* padding: 2vmin; */
      img {
        width: 100%;
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
