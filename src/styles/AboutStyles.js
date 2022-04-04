import styled from "styled-components";
export const AboutStyles = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  gap: 60px;

  .title {
    display: grid;
    gap: 50px;
    justify-content: center;
    p {
      padding: 0 5vmin;
    }
  }

  a {
    position: relative;
    span {
      padding: 15px 20px;
    }
    .link {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 15px;
      color: aliceblue;
      top: -120%;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s;
      font-family: "Open Sans";
      font-weight: normal;
    }
    &:hover {
      .link {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .contacts {
    display: flex;
    flex: wrap;
    gap: 100px;
    position: relative;

    .contact {
      display: grid;
      position: relative;
      justify-content: center;
      justify-items: center;
      .icon {
        font-size: 50px;
      }
    }
  }
`;
