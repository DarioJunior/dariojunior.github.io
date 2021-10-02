import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  height: 250px;
  /* background-color: #746C70; */
  background-color: #3b444b;

  border-radius: 25px;
  margin: 10px auto;
  padding: 30px 30px;

  cursor: pointer;
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
    color: white
  }

  h4 {
    display: inline;
  }
`;