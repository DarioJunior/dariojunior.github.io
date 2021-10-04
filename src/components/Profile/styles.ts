import styled from "styled-components";

export const Container = styled.section`
  width: 45%;
  height: 100%;
  /* background-color: #647C90; */
  background-color: #232b2b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;

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
    height: 40%;
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
    padding-top: 10%;
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

  @media screen and (max-width: 1024px) {
    @media screen and (max-height: 600px) {
      .profile-sticker-image {
        margin-top: -15%;
        width: 180px;
        height: 180px;
        border-radius: 100%;
        background-color: #0ade98;
        
        position: relative;
        img {
          position: absolute;
          top: 35px;
          left: 15px;
          width: 160px;
        };
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    /* overflow: auto; */
    justify-content: flex-start;
    gap: 5%;

    .profile-sticker-image {
      margin-top: 5%;
      width: 80px;
      height: 80px;
      img {
        top: 5px;
        left: 2px;
        width: 90px;
      };
    }

    .about {
      .apresentation {
        font-size: 2rem;
      }

      .abstract {
        padding-top: 15px;
      }
    }

    .icon-container {
      width: 100%;
      padding-top: 3%;
      a { // Seleciona a partir do 1º 
        margin-left: 10px;
        img {
          transition: transform 0.3s;
        }
        img:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
