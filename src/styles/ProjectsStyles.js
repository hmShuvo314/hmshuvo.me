import styled from "styled-components";

export const ProjectStyles = styled.div`
  gap: 150px;
  .title {
    h1 {
      font-size: 10vmin;
    }
    p {
      font-size: clamp(12px, 4vmin, 4vmin);
      letter-spacing: 0.3vmin;
      font-style: normal;
    }
  }

  .all-projects {
    display: grid;
    place-items: center;
    gap: 100px;
    margin-bottom: 150px;
    .wrapper {
      height: 250px;
      border: 3px solid aliceblue;
      box-shadow: 8px 8px 0 0 blueviolet, -8px -8px 0 0 cyan;
      width: clamp(250px, 60%, 1200px);
      display: grid;
      place-items: center;
      perspective: 1000px;
      border-radius: 5px;
      position: relative;
      .timeline {
        position: absolute;
        width: max-content;
        margin: 30px;
        font-size: 25px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        color: aliceblue;
        &.right {
          transform-origin: left;
          transform: rotateZ(90deg) translateX(-50%);
          left: 100%;
        }
        &.left {
          transform-origin: right;

          transform: rotateZ(-90deg) translateX(50%);
          left: none;

          right: 100% !important;
        }
      }

      .item {
        position: relative;

        width: clamp(300px, 100%, 1200px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 20px;
        transform: rotateY(-35deg) translateX(10%);
        transform-origin: center;
        overflow: hidden;
        background: linear-gradient(to right, transparent, white);
        &.reverse {
          background: linear-gradient(to left, transparent, white);
          transform: rotateY(35deg) translateX(-10%);
          flex-direction: column;
        }
        height: 90%;
        backdrop-filter: blur(100px);

        .item_title {
          h1 {
            font-size: 5vmin;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            transition: all 0.3s;

            &:after {
              transition: 0.3s;
              position: absolute;
              content: "";
              width: 100%;
              height: 2px;
              border-radius: 5px;
              bottom: 0;
              left: 0;
              background: teal;
              transform: translateX(-100%);
            }

            &.right {
              &:after {
                transform: translateX(100%);
              }
            }

            &:hover {
              transform: scale(1.1);
              text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
              &:after {
                transform: translateX(0%);
              }
            }
          }
          h2 {
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
          }
        }
        .item_details {
          height: 100%;
          overflow: auto;
          width: 50%;
          min-width: 300px;
          p {
            font-size: 20px;
            text-align: center;
          }
        }
      }
    }
  }
`;
