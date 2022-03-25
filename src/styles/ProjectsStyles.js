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

  .all-experience {
    display: grid;
    place-items: center;
    gap: 100px;
    width: fit-content;
    .wrapper {
      height: 260px;
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
        width: clamp(280px, 100%, 1200px);
        border-radius: 3px;
        display: grid;
        justify-items: center;
        align-content: space-between;
        gap: 10px;
        padding: 20px;
        transform: rotateY(-35deg) translateX(10%);
        transform-origin: center;
        overflow: hidden;
        background: linear-gradient(to right, transparent, white);
        &.reverse {
          background: linear-gradient(to left, transparent, white);
          transform: rotateY(35deg) translateX(-10%);
        }
        height: 90%;
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
          min-width: 250px;
          p {
            font-size: clamp(15px, 2.5vmin, 25px);
            text-align: center;
          }
        }
      }
    }
  }
  .all-projects {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    gap: 150px;
    place-self: center;
    justify-content: center;
    margin-bottom: 150px;
    max-width: 1200px;
    .project {
      width: clamp(230px, 30vmin, 400px);
      aspect-ratio: 1/1;
      position: relative;
      perspective: 600px;
      padding: 10px;
      padding-top: 30px;
      text-align: center;
      border-radius: 50%;
      background-color: aliceblue;
      h1 {
        font-size: clamp(20px, 3.5vmin, 30px);
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        margin-bottom: 20px;

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
          transform: scaleX(0);
          transform-origin: center;
        }
        &:hover {
          transform: scale(1.1);
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          &:afer {
            transform: scaleX(1);
          }
        }
      }
      .detail {
        background: rgb(240, 248, 255, 0.2);
        padding: 15px;
        border-radius: 5px;
        overflow: auto;
        height: 100%;
        p {
          font-size: clamp(15px, 1.8vmin, 25px);
          text-align: center;
          font-weight: 600;
        }
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100% 5% 5% 5% / 100% 5% 5% 5%;
        background-color: blueviolet;
        right: -10%;
        bottom: -10%;
        transform-origin: center;
        transform: rotate3d(0.5, -0.5, 0, 60deg);
        z-index: -1;
      }
      &:before {
        z-index: -1;
        transform-origin: center;
        transform: rotate3d(-0.5, 0.5, 0, 60deg);
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5% 5% 100% 5% / 5% 5% 100% 5%;
        background-color: cyan;
        left: -10%;
        top: -10%;
      }
    }
  }
`;
