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
        align-content: center;
        gap: 10px;
        padding: 20px 0;

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
              background: darkblue;
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
            font-size: clamp(15px, 2.5vmin, 20px);
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
    gap: 200px;
    place-self: center;
    justify-content: center;
    margin-bottom: 150px;
    max-width: 1200px;
    .project {
      width: clamp(230px, 30vmin, 260px);
      aspect-ratio: 3/4;
      position: relative;
      perspective: 600px;
      padding-top: 30px;
      .wrapper1 {
        padding: 10px;
        position: relative;
        border-radius: 20px;
        background: rgb(255, 255, 255, 0.5);
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        z-index: 9;
        gap: 10px;
        display: grid;
        justify-items: center;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: clamp(20px, 3.5vmin, 30px);
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          width: max-content;
          padding-bottom: 5px;

          &:after {
            transition: 0.3s;
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            border-radius: 5px;
            bottom: 0;
            left: 0;
            background: darkblue;
            transform: scaleX(0);
            transform-origin: center;
          }
          &:hover {
            transform: scale(1.1);
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
            &:after {
              transform: scaleX(1);
            }
          }
        }
        .detail {
          padding: 15px;
          border-radius: 5px;
          /* overflow: hidden; */

          height: 100%;
          overflow: auto;
          p {
            font-size: clamp(15px, 1.8vmin, 25px);
            text-align: center;
            font-weight: 600;
          }
        }
        .links {
          display: flex;
          gap: 30px;
          font-size: 25px;
          a {
            transition: 0.3s;

            &:hover {
              transform: scale(1.3);
            }
          }
        }
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100% 10% 10% 10% / 100% 10% 10% 10%;
        background-color: transparent;
        border: 20px solid blueviolet;
        right: -15%;
        bottom: -15%;
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
        border-radius: 10% 10% 100% 10% / 10% 10% 100% 10%;
        background-color: transparent;
        border: 20px solid cyan;
        left: -15%;
        top: -15%;
      }
    }
  }
`;
