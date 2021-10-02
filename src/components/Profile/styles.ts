import styled from "styled-components";

export const Container = styled.section`
  width: 45%;
  height: 100%;
  /* background-color: #647C90; */
  background-color: #232b2b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .profile-sticker-image {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: #0ade98;

    position: relative;
    img {
      position: absolute;
      top: 35px;
      left: 15px;
      width: 180px;
    };
  }

  .about {
    height: 20%;
    padding: 0 25px;
    text-align: justify;

    .apresentation {
      width: 100%;
      text-align: center;
      font-size: 3rem;
      font-weight: 900;
      background: -webkit-linear-gradient(#eee, #0ade70);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .abstract {
      font-size: 1.2rem;
      padding-top: 30px;
      color: white;
    }

  }

  .icon-container {
    text-align: center;
    width: 100%;

    a { // Seleciona a partir do 1º 
      margin-left: 30px;

      img {
        transition: transform 0.3s;
      }
      img:hover {
        transform: scale(1.2);
      }
    }
  }
`;
