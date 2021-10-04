import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 30%;
  cursor: pointer;
  /* background-color: #746C70; */
  background-color: #3b444b;
  border-radius: 25px;

  margin: 10px auto;
  padding: 30px 30px;
  
  /* overflow: auto; */
  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
    filter: brightness(1.3);
  }

  h5 { 
    letter-spacing: 5px;
    background: -webkit-linear-gradient(#eee, #0ade70);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 10px;
  }

  h2, h4, p {
    line-height: 30px;
    color: white;
    text-align: justify;
  }

  h4 {
    display: inline;
  }

  a { 
    line-height: 40px;
    font-size: 1.1rem;

    font-weight: 600;
    color: white;
    text-decoration: none;

    transition: font-size 0.3s;
    &:hover {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 32%;
  }
`;